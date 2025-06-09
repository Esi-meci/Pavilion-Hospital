import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Footer/Footer.css"
import logo from "../Images/new.png"


function Footer() {
    // email functions 

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        console.log("Email submitted:", email);
    }
    return (
        // footer section 
        <section className="back1 mt-10 py-8">
            <div className="flex flex-col p-1.5 md:flex-row justify-around text-white ">


                <div className="">
                    <img className="w-[120px] " src={logo} alt="PMC Logo" />
                    <p className="text-lg font-bold tracking-wide">Your health, our priority</p>
                    <div className="flex gap-5 mt-2.5">

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 icon "><FaFacebook size={19} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 icon"><FaTwitter size={19} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer " className="hover:text-blue-200  icon"><FaInstagram size={19} /></a>
                    <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer' className="hover:text-blue-200 icon"><FaLinkedin size={19} /></a>
                    </div>
                </div>


                <div className="mb-6 text-[14px] ">
                    <h1 className="text-xl font-bold   ">Quick Links</h1>
                    <div className="grid grid-cols-2 gap-2 mt-2.5 cursor-pointer leading-7 ">
                        <ul>
                            <li className=" hover:text-blue-400">Home</li>
                            <li className=" hover:text-blue-400">About Us</li>
                            <li className=" hover:text-blue-400">Services</li>
                            <li className=" hover:text-blue-400">Contact Us</li>
                            <li className=" hover:text-blue-400">Our Team</li>
                        </ul>
                        <ul>
                            <li className=" hover:text-blue-400 ">FAQ</li>
                            <li className=" hover:text-blue-400">Blog</li>
                            <li className=" hover:text-blue-400">Testimonials</li>
                            <li className=" hover:text-blue-400">Download Our App</li>
                            <li className=" hover:text-blue-400">Gallery</li>
                        </ul>
                    </div>
                </div>


                <div className="mb-6 w-[300px] text-[14px] tracking-wide ">
                    <h1 className="text-xl font-bold mb-3"> Opening Hours</h1>
                    <p className="tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, culpa!</p>
                    <div className="grid grid-cols-2 gap-2 capitalize leading-7">
                        <ul>
                            <li>mon-thu</li>
                            <li>fri-sat</li>
                            <li>Sunday</li>

                        </ul>

                        <ul>
                            <li className="text-blue-400">8:00AM-11:00PM</li>
                            <li className="text-blue-400">9:00AM-11:00PM</li>
                            <li className="text-blue-400">12:30PM-9:00PM</li>

                        </ul>
                    </div>
                </div>

                <div className="mb-6 w-[320px] text-[15px] tracking-wide">

                    <h1 className="text-xl font-bold mb-3">NewsLetter</h1>
                    <h1 className="font-semibold text-lg mb-1">Subscribe to our news letter</h1>
                    <p className="tracking-wide">Stay informed and never miss out on the latest news, health tips.</p>
                    <div className="flex gap-10 mt-2 ">
                        <form action={handleSubmit}>
                            <label htmlFor="Email"></label>
                            <input type="text"
                                name="Enter Your Email"
                                id="Enter Your Email"
                                placeholder="Enter Your Email..."
                                className="focus:outline-none border rounded-[8px]  p-1 text-[12px] border-blue-400 py-3   "
                            />


                            <label htmlFor="submit" className=" mr-1"></label>
                            <input type="submit" name="subscribe" id="subscribe" value="subscribe" className="btn1  px-8 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 gap-10 hover:bg-sky-600 font-semibold text-[15px]" />

                    
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 text-sm text-white tracking-wide">
                <h1>Copyright {new Date().getFullYear()} © <span className="about font-bold">PMC</span> All Rights Reserved.</h1>
            </div>
        </section>
    );
}

export default Footer;


