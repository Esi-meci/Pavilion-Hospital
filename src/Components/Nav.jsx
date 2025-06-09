import {Link} from "react-router-dom";
import { useState } from "react";
import logo from "../Components/Images/new.png"
import '../Components/Nav/Nav.css';
import '../Components/Header/Header.jsx'
import Button from "../Components/Button/Button.jsx"
// import { GiHamburgerMenu } from "react-icons/gi";


// nav section 
function Nav() {

  // nav functions 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
      // nav styling 
        <nav className="flex flex-wrap justify-between mx-auto items-center cursor-pointer top-0  bg-white shadow-md w-full   px-10    ">
        

                <div>
                    <img className=" w-[100px] p-0 ml-5" src={logo} alt="image" />
                </div>
            <div className="hidden md:flex space-x-4 ">
                <Link to={"/"} className="px-3 py-2 text-[16px] font-semibold">Home</Link>
                <Link to={"/about"} className="px-3 py-2 text-[16px] font-semibold">About</Link>
                <Link to={"/services"} className="px-3 py-2 text-[16px] font-semibold">Services</Link>
                <Link to={"/gallery"} className="px-3 py-2 text-[16px] font-semibold">Gallery</Link>
                <Link to={"/contact"} className="px-3 py-2 text-[16px] font-semibold">Contact us</Link>
                 <Button href="#appointment"
             className=" font-semibold shine-button cursor-pointer mr-5 bg-gradient-to-r from-cyan-500 to-blue-500  py-2.5 px-7 rounded text-white" 
             content="Appointment" id="appoint"> </Button>
            </div>

            {/* mobile menu button */}
            <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
            )}
            </button>
          </div>
          {/* Mobile Menu - shown when toggle is clicked */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white pb-3`}>
            <div className="px-2 pt-2 space-y-1">
                <Link to={"/"} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100" id="top">Home</Link>
                <Link to={"/about"} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">About</Link>
                <Link to={"/services"} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Services</Link>
                <Link to={"/gallery"} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Gallery</Link>
                <Link to={"/contact"} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Contact us</Link>
                <Button href="#appointment"
             className=" font-semibold shine-button cursor-pointer mr-5 bg-gradient-to-r from-cyan-500 to-blue-500  py-2.5 px-7 rounded text-white" 
             content="Appointment" id="appoint"> </Button>
            </div>
            </div>

           

        </nav>



    );
}

export default Nav;

