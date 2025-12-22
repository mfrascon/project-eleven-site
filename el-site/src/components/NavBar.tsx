import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <nav className="bg-[#F0F0E4] shadow-lg flex items-center justify-between py-3 px-32 fixed top-0 left-0 w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
            <img
            src={logo}
            alt="Project Eleven Logo"
            className="h-12 w-auto object-contain"
            />
        </Link>

            <div className="flex items-center gap-5 text-black">
                <Link to="/" className="py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    Home
                </Link>

                <Link to="/about" className="py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    About
                </Link>

                <Link to="/contact" className="py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    Contact
                </Link>

                <Link to="/services" className="py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    Services
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;