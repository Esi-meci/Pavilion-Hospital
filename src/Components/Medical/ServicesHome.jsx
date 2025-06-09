import { Link } from "react-router-dom"
import Eyecare from "../Images/eye care.png"
import Heart from "../Images/heart.png"
import Dental from "../Images/dental-care.png"
import Surgery from "../Images/surgery.png"
import Medical from "../Images/medical.png"
import Brain from "../Images/brain.png"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';







function ServicesHome() {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 300,
            distance: '30px',
            duration: 900,
            easing: 'ease-in-out',
            opacity: 0,
          
        });
    }, []);
    return (
        <>
        
        <section className=" mt-20 mb-20">
            <div className="text-center reveal">
                <h1 className="font-semibold about capitalize text-3xl">medical services</h1>
                <h1 className="text-center text-5xl capitalize">We Offer Different Services To improve Your Health</h1>
            </div>
            <div className="flex flex-wrap  justify-center gap-4 py-1 items-center text-center reveal mt-5">
                <div className="w-64 text-xs  py-2 px-2 border-2 border-white tracking-wide cursor-default rounded-xl shadow-xl news1 leading-4 " >
                    <img className="w-12 m-auto" src={Eyecare} alt="Eye image" />
                    <h1 className="font-bold">Eye care</h1>
                    <p className="">Our Eye Care Center is dedicated to providing comprehensive vision and eye health services. Whether you need a routine eye exam, prescription glasses, contact lenses.</p>
                </div>
                <div className="w-64 text-xs leading-4 bg-white border-2 border-white tracking-wide rounded-xl shadow-xl news1 cursor-default py-2 px-2">
                    <img className="w-12 m-auto" src={Heart} alt="Cardiology image" />
                    <h1 className="font-bold mt-0.5">Cardiology</h1>
                    <p>Your heart health is our priority. Our Cardiology Department specializes in diagnosing and treating heart-related conditions such as hypertension, arrhythia, and heart failure.</p>
                </div>
                <div className="w-64 text-xs py-2 px-2 border-2 border-white tracking-wide rounded-2xl shadow-xl leading-4  news1 cursor-default ">
                    <img className="w-12 m-auto" src={Dental} alt="Dental image" />
                    <h1 className="font-bold mt-0.5">Dental Care</h1>
                    <p>A healthy smile starts here! Our Dental Clinic offers a wide range of oral health services, from preventive cleanings to advanced dental surgeries. Whether you need teeth whitening, or emergency care.</p>
                </div>
                <div className="w-64 text-xs  leading-4 bg-white border-2 tracking-wide border-white rounded-xl shadow-xl news1 py-2 px-2 cursor-default ">
                    <img className="w-12 m-auto" src={Surgery} alt="Surgery image" />
                    <h1 className="font-bold mt-0.5">Surgery Care</h1>
                    <p>Our Surgical Department offers both minor and major surgical procedures using the latest medical technology. From minimally invasive surgeries to complex operations. </p>

                </div>
                <div className="w-64 text-xs py-2 px-2 border-2 tracking-wide border-white  bg-white rounded-xl shadow-xl news1 leading-4 cursor-default ">
                    <img className="w-12 m-auto " src={Medical} alt="Medica image" />
                    <h1 className="font-bold mt-0.5">Medical Care</h1>
                    <p>Our  Medicine Department provides primary healthcare services to help diagnose and treat a variety of health conditions. From routine checkups to chronic disease management.</p>
                </div>

                <div className="w-64 px-2 py-2 text-xs tracking-wide  border-2 border-white bg-white leading-4  rounded-xl shadow-xl news1 cursor-default">
                    <img className="w-12 m-auto" src={Brain} alt="Brain image" />
                    <h1 className="font-bold mt-0.5">Neuroscience</h1>
                    <p>Our Neuroscience Department provides expert care for brain, spine, and nervous system disorders. With advanced diagnostics, we offer treatment for conditions like epilepsy.</p>
                </div>
            </div>
                <Link to={"/services"} className="flex justify-center w-fit h-auto font-bold cursor-pointer m-auto flex bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-8  mt-5 rounded-[5px] text-white text-[13px] shine-button reveal">View More</Link>











        </section>
        </>


    );
}

export default ServicesHome;