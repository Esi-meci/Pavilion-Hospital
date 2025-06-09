

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot} from 'react-icons/fa6';


// header section 

function Header() {

    // header styling 
    return (
        <div className="grid grid-cols-1 md:flex md:flex-wrap gap-2 justify-between p-2 text-white back1 ">


            <div className="md:flex flex-wrap text-[14px]">

                <div className='flex gap-3 p-1.5'>
                <FaLocationDot size={18} className=' hover:text-blue-200' /> <p>TBS, Victoris island</p>
                </div>
                <div className='flex gap-3 p-1.5'>
                    <FaPhoneAlt size={18} className=' hover:text-blue-200' /><p>+234-810-149-265</p>
                </div>
                <div className='flex gap-3 p-1.5'>
                <FaEnvelope size={18} className=' hover:text-blue-200' /> <p>PeoplesMedicalCenter@pmc.com</p>
                </div>
                
                
            </div>

            <div className="flex gap-5 p-1.5 flex-wrap cursor-pointer">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 icon "><FaFacebook size={19} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 icon"><FaTwitter size={19} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer " className="hover:text-blue-200  icon"><FaInstagram size={19} /></a>
                <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer' className="hover:text-blue-200 icon"><FaLinkedin size={19} /></a>

            </div>


        </div>
    );
}


export default Header;