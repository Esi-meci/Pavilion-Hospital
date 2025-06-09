
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import sales from "../Images/sales.jpg"
import finance from "../Images/finance.jpg"
import rose from "../Images/rose.jpg"
import amanda from "../Images/amanda.jpg"
import kate from "../Images/kate.jpg"
import louis from "../Images/louis.jpg"

// testimonials details 

const testimonials = [

    
    {
        name: "Willson",
        role: "Emergency Care Visitor",
        image: finance,
        message:
            "I came in during a late-night emergency, and the response was fast, organized, and compassionate. From the front desk to the doctors, everyone treated me with care and urgency.",
    },
    {
        name: "David",
        role: "Eye Surgery Patient",
        image: sales,
        message:
            "I was nervous about getting eye surgery, but from my first consultation to the post-op care, the team was exceptional. The doctors explained everything clearly, and the recovery process was smooth.",
    },
  
    {
        name: "Amanda",
        role: "surgery recovery patient",
        image: amanda,
        message: "Recovering from surgery was one of my biggest fears. But the post-op care here went far beyond my expectations.Nurses checked on me constantly, making sure I was okay. They gave me encouragement and genuine care.",

    },
    {
        name: "Rose",
        role: "Urgent care visitor",
        image: rose,
        message: "My husband needed urgent care, and the hospital responded immediately. From the emergency room to follow-up visits, every doctor and nurse treated us with kindness and professionalism. The process was smooth, and full of compassion.",

    },
    {
        name: "louis",
        role: "Cardiology Patient",
        image: louis,
        message: "The cardiology team here changed my life Their personalized care and patience stood out. I feel stronger and healthier every day.Forever grateful for their dedication and so many more to come in the near future.",
    },
    {
        name: "Kate",
        role: "Orthopedic Patient",
        image: kate,
        message: "I've seen many healthcare centers come and go. This hospital stands out for its commitment to quality care and innovation. From routine checkups to specialist consultations. I feel confident trusting them with my family's health."
    },
];

export default function Testimonials() {

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 200,
            distance: "80px",
            duration: 800,
            opacity: "0",
            easing: "ease-in-out",
        });
    }, []);


    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 2;

    const prev = () => {
        setStartIndex((prevIndex) =>
            prevIndex - itemsPerPage < 0
                ? testimonials.length - itemsPerPage
                : prevIndex - itemsPerPage
        );
    };

    const next = () => {
        setStartIndex((prevIndex) =>
            prevIndex + itemsPerPage >= testimonials.length
                ? 0
                : prevIndex + itemsPerPage
        );
    };

    const visibleTestimonials = testimonials.slice(
        startIndex,
        startIndex + itemsPerPage
    );


    
    return (
        <section className="mt-20 mb-32 ">
            <div className="p-10 flex gap-7 justify-around flex-wrap reveal">
                {/* Intro Text */}
                <div className="w-96">
                    <p className="about font-bold mb-3.5 text-2xl">20+ years of experience </p>
                    <h1 className="text-5xl text-gray-800 mb-3.5">
                        what our patients say about us{" "}
                    </h1>
                    <p>
                        At PMC Hospital, our patients are at the heart of everything we do.
                        From the moment you walk through our doors, your care, comfort, and
                        recovery become our top priority.
                    </p>
                </div>

                {/* Carousel Section */}
                <div className="flex gap-4 flex-wrap items-start">
                    {/* Prev Button */}
                    <button
                        onClick={prev}
                        className="h-fit bg-gray-800 cursor-pointer text-gray-300 px-1.5 py-1 rounded"
                    >
                        ❮
                    </button>

                    {/* Testimonials */}
                    {visibleTestimonials.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start flex-wrap">
                            <img className="testimonials" src={item.image} alt={item.name} />
                            <div className="flex-wrap">
                                <p className="capitalize text-[20px] font-semibold tracking-wide">
                                    {item.name}
                                </p>
                                <h1 className="capitalize">{item.role}</h1>
                                <p className="w-56 p-5 bg-gray-500 text-white text-[15px] shadow-xl shadow-gray-700 ">
                                    "{item.message}"
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={next}
                        className="h-fit bg-gray-800 cursor-pointer text-gray-300 px-1.5 py-1 rounded "
                    >
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
}


