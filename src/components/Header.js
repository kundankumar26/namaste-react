import Logo from "../assets/img/food villa.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const Header = () => {
    const isOnline = useOnline();
    return (
        <>
            <div class='flex justify-between place-items-center py-2 px-10 bg-pink-200'>
                <div>
                    <img className='w-24' src={Logo} />
                </div>
                <div className='nav-items self-center'>
                    <ul class='flex justify-around'>
                        <li class='m-2'><Link to='/'>Home</Link></li>
                        <li className='m-2'><Link to='/about'>About us</Link></li>
                        <li className='m-2'><Link to='/about/profile'>Profile</Link></li>
                        <li className='m-2'><Link to='/contact'>Contact</Link></li>
                        <li className='m-2'><Link to='/instamart'>Instamart</Link></li>
                    </ul>
                </div>
                <h1>{isOnline ? "✅" : "🔴"}</h1>
            </div>
        </>
    );
};

export default Header;