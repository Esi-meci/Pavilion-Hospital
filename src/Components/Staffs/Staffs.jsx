

import james from "../Images/James.jpg"
import Kaila from "../Images/Kaila.jpg"
import mandy from "../Images/Mandy.jpg"
import philip from "../Images/Philip.jpg"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "../Staffs/Staffs.css";





function Staffs() {
    // scroll animation 

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 200,
            distance: '20px',
            duration: 800,
            easing: 'ease-in-out',
            opacity: 0,
        })
    }, []);


    // staffs styling 
    return (
        <section className="mt-32 mb-36  reveal ">
            <div className="text-center">

                <h1 className="text-3xl capitalize medical font-semibold">our medical specialist</h1>
                <p className="text-5xl font-semibold capitalize mb-5" >we are happy to help you </p>
            </div>

            <div className=" flex justify-between gap-4 p-4 flex-wrap  staffs  ">
                <div >
                    <img className="w-72 hover:scale-95  transition-all duration-300 ease-in-out" src={james} alt="" />
               
                    <h1 className="flex flex-col text-[20px] items-center justify-center text-gray-600 font-bold text mt-0.5">Dr. James</h1>
                    <p className="text-center text-gray-700 font-semibold ">Nephrologist</p>
                </div>
                <div>

                    <img className="w-72 hover:scale-95  transition-all duration-300 ease-in-out" src={Kaila} alt="" />
                    <h1 className="flex flex-col text-[20px] items-center justify-center text-gray-600 font-bold text mt-0.5">Dr. Kaila</h1>
                    <p className="text-center text-gray-700 font-semibold ">Anesthesiologist</p>
                </div>
                <div>

                    <img className="w-72 hover:scale-95  transition-all duration-300 ease-in-out" src={philip} alt="" />
                    <h1 className="flex flex-col text-[20px] items-center justify-center font-bold  text mt-0.5">Dr. Philips</h1>
                    <p className="text-center text-gray-700 font-semibold ">Neurosurgeon</p>
                </div>
                <div>

                    <img className="w-72 hover:scale-95  transition-all duration-300 ease-in-out" src={mandy} alt="" />
                    <h1 className="flex flex-col text-[20px] items-center justify-center text-gray-600 font-bold text mt-0.5">Dr. Mandy</h1>
                    <p className="text-center text-gray-700 font-semibold ">Cardiologist</p>

                </div>




            </div>


        </section>
    );
}

export default Staffs;