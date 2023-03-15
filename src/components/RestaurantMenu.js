import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from '../constants';
import useRestaurant from "../hooks/useRestaurant";
import { addItem } from "../utils/cartSlice";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    return !restaurant ? (
        <Shimmer />
    ) : (
        <div className="menu flex p-5">
            <div className="p-4">
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            <div className="p-4">
                <h2>Menu</h2>
                {Object.values(restaurant?.menu?.items).map((item) => (
                    <li className="py-1" key={item.id}>
                        {item.name} - {' '}
                        <button className="p-1 bg-green-50 border" onClick={() => addFoodItem(item)}>Add item</button>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;