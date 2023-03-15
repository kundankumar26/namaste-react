import Logo from "../assets/img/food villa.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../utils/userContext";
import UserContextSecond from "../utils/userContextSecond";
import { useSelector } from "react-redux";

const Header = () => {
    const isOnline = useOnline();
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <>
            <div className='flex justify-between place-items-center py-2 px-10 bg-pink-200'>
                <div>
                    <img className='w-24' src={Logo} />
                </div>
                <div className='nav-items self-center'>
                    <ul className='flex justify-around'>
                        <li className='m-2'><Link to='/'>Home</Link></li>
                        <li className='m-2'><Link to='/about'>About us</Link></li>
                        <li className='m-2'><Link to='/about/profile'>Profile</Link></li>
                        <li className='m-2'><Link to='/contact'>Contact</Link></li>
                        <li className='m-2'><Link to='/instamart'>Instamart</Link></li>
                        <li className='m-2'><Link to='/cart'>Cart - {cartItems.length}</Link></li>
                    </ul>
                </div>
                <div className="flex">
                    <span className="px-2 font-meduim">
                        {/* we used this method to get context in class based components */}
                        <UserContextSecond.Consumer>
                            {({user}) => {
                                return user.name + '-' + user.email;
                            }}
                        </UserContextSecond.Consumer>
                    </span>
                    <span>{isOnline ? "✅" : "🔴"}</span>
                </div>
            </div>
        </>
    );
};

export default Header;