const Navbar = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="header-left">
                <img src="https://acedeckboards.ca/cdn/shop/files/8d8f334e7276d87a33d42ef609db5225_110x.webp?v=1679656262" alt="mian-logo" />
            </div>
            {/* header logo */}
            <div>
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li><a href="/">Books Alls</a></li>
                    <li><a href="/">Sign In </a></li>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Log Out</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;