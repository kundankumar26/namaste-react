import { createContext, useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import UserContext from "../utils/userContext";
import UserContextSecond from "../utils/userContextSecond";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING');
        const restaurants = await data.json();
        setFilteredRestaurants(restaurants?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(restaurants?.data?.cards[2]?.data?.data?.cards);
    };

    if(!allRestaurants) return null;
    const {user, setUser} = useContext(UserContextSecond);
    // {console.log(useContext(UserContextSecond))}

    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div className="flex py-3 bg-yellow-200">
                <input
                    className="search-container min-w-0 mx-3 border bg-cyan-200 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                    type="text"
                    value={user.name}
                    onChange={e => {
                        setUser({
                            ...user,
                            name: e.target.value
                        });
                    }}
                />
                <input
                    className="search-container min-w-0 mx-3 border bg-cyan-200 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setFilteredRestaurants(filterRestaurants(e.target.value, allRestaurants));
                    }}
                />
                <button
                    className="flex-none rounded-md bg-indigo-500 px-6 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={(e) => {
                        setFilteredRestaurants(filterRestaurants(searchText, allRestaurants));
                    }}
                >
                    Search
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
