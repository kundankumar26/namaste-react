import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    const getRestaurantDetails = async() => {
        const data = await fetch(FETCH_MENU_URL + resId);
        const json = await data.json();
        setRestaurant(json.data);
    };

    return restaurant;
};

export default useRestaurant;