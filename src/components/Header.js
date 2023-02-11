import Logo from "../assets/img/food villa.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className='header-container'>
                <div>
                    <img className='logo-img' src={Logo} />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li className='list-item'><Link to='/'>Home</Link></li>
                        <li className='list-item'><Link to='/about'>About us</Link></li>
                        <li className='list-item'><Link to='/about/profile'>Profile</Link></li>
                        <li className='list-item'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;