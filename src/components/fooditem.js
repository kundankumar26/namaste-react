import { IMG_CDN_URL } from "../constants";

const FoodItem = ({name, description, cloudinaryImageId, price}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h1 className="font-bold text-xl">{ name }</h1>
            <h3>{ description }</h3>
            <span className="font-medium">Rupees: - {price / 100}</span>
        </div>
    )
};

export default FoodItem;