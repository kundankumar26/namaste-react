import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./fooditem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <span className="font-bold text-3xl">cart item - {cartItems.length}</span>
            <button className="bg-green-100 p-2 m-5" onClick={() => {handleClearCart()}}>clear cart</button>
            <div className="flex">
            {
                cartItems.map(item => {
                    return <FoodItem key={item.id} {...item} />
                })
            }
            </div>
        </div>
    );
}

export default Cart;