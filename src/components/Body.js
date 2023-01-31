import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterRestaurants = (searchText, restaurants) => {
    if (searchText.length === 0) return restaurants;
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
};

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

    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setFilteredRestaurants(filterRestaurants(e.target.value, allRestaurants));
                    }}
                />
                <button
                    onClick={(e) => {
                        setFilteredRestaurants(filterRestaurants(searchText, allRestaurants));
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;
