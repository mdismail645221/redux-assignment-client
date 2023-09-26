const Navbar = () => {
    return (
        <header className=" bg-black text-white ">
            <section className={`flex items-center justify-between container mx-auto`}>
            <div className="header-left">
                <img src="https://acedeckboards.ca/cdn/shop/files/8d8f334e7276d87a33d42ef609db5225_110x.webp?v=1679656262" alt="mian-logo" />
            </div>
            {/* header logo */}
            <div className="header-right sm:hidden md:block">
                <ul className="flex justify-start items-center text-2xl flex-nowrap">
                    <li className="list-none  border-r-2 border-gray-500"> <a className="px-3 text-white" href="/">Home</a></li>
                    <li className="list-none  border-r-2 border-gray-500"><a className="px-3 text-white" href="/">Books Alls</a></li>
                    <li className="list-none  border-r-2 border-gray-500"><a className="px-3 text-white" href="/">Sign In </a></li>
                    <li className="list-none  border-r-2 border-gray-500"><a className="px-3 text-white" href="/">Sign Up</a></li>
                    <li className="list-none  border-r-2 border-gray-500"><a className="px-3 text-white" href="/">Log Out</a></li>
                </ul>
            </div>
            </section>
        </header>
    );
};

export default Navbar;