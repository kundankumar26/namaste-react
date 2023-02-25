import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    return (
        <div className='border-1 w-56 p-2 m-2 shadow-md'>
            <img alt='logo' src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
};

export default RestaurantCard;