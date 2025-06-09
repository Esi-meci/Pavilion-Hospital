
import review from "../Images/review.png"
import doctors from "../Images/doctors.png"
import firstAid from "../Images/medicalk.png"
import quality from "../Images/24hours.png"
import services from "../Images/servicess.jpg"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from "react-router-dom"

function About() {
  // scroll animation 
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
          delay: 200,
          distance: '20px',
          duration: 800,
          easing: 'ease-out',
          opacity: 0,
         
        });
      }, []);

    
    return (

      // aboiut styling 
        <section  className="mt-16 mb-20 px-3 min-h-[600px]">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
    
    {/* Left Image */}
    <div className="max-w-[490px] w-full">
      <img src={services} alt="PMC Services" className="w-full rounded-2xl" />
    </div>

    {/* Right Content */}
    <div className="max-w-full">
      <div className=" ">
        <h1 className="text-5xl font-bold about">Who we are</h1>
        <h1 className="text-[30px] font-bold capitalize text-black">Your Health, Our Priority</h1>
        <p className="text-[18px] text-gray-600 font-light leading-[22px] mt-2">
          PMC Medical Center is a leading healthcare provider dedicated to delivering exceptional, patient-centered care...
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 text-center mt-5">
        {/* Individual Card */}
        <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-tl-4xl rounded-lg box py-2 px-2">
          <img src={doctors} alt="Description" className="w-12 m-auto icon" />
          <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
          <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
          <Link to={"/about"} className="read capitalize font-semibold">Read More</Link>
        </div>
        <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-tr-4xl rounded-lg box py-2 px-2">
          <img src={quality} alt="Description" className="w-12 m-auto icon" />
          <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
          <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
          <Link to={"/about"} className="read capitalize font-semibold">Read More</Link>
        </div>
        <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-tl-4xl rounded-lg box py-2 px-2">
          <img src={firstAid} alt="Description" className="w-12 m-auto icon" />
          <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
          <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
          <Link to={"/about"} className="read capitalize font-semibold">Read More</Link>
        </div>
        <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-tr-4xl rounded-lg box py-2 px-2 ">
          <img src={review} alt="Description" className="w-12 m-auto icon" />
          <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
          <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
          <Link to={"/about"} className="read capitalize font-semibold">Read More</Link>
        </div>

       
      </div>
    </div>
  </div>
</section>


    

    );
}


export default About;