import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from '../constants';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    const getRestaurantDetails = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=22.572646&lng=88.36389500000001&menuId=' + resId);
        const json = await data.json();
        setRestaurant(json.data);
    };

    return !restaurant ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <div>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            <div>
                <h2>Menu</h2>
                {Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;