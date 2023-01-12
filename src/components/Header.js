const Header = () => {
    return (
        <>
            <div className='header-container'>
                <div>
                    <img className='logo-img' src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7" />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li className='list-item'>Home</li>
                        <li className='list-item'>About us</li>
                        <li className='list-item'>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;