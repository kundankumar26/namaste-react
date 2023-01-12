import { useState } from "react";
import { RestaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const filterRestaurants = (searchText, restaurants) => {
    if (searchText.length === 0) return restaurants;
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
};

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(RestaurantList);
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setRestaurants(filterRestaurants(e.target.value, RestaurantList));
                    }}
                />
                <button
                    onClick={(e) => {
                        setRestaurants(filterRestaurants(searchText, RestaurantList));
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;
