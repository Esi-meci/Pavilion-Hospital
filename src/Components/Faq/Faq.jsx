import Accordian from "./Accordian.jsx";
import faqimage from "../Images/faqimage.jpg"
import { useState } from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


// faq details 

function Faq() {
    const [openIndex, setIsOpenindex] = useState(null);
    const faqData = [
        {

            question: "Do I need an appointment?",
            answer: "Appointments are preferred but walk-ins are welcome for emergencies."
        },
        {

            question: "How long is the wait time to see a doctor?            ",
            answer: "At PMC, we prioritize urgent cases while minimizing wait times.            "
        },
        {

            question: "What should I do in case of a medical emergency?            ",
            answer: "For life-threatening emergencies, call our 24/7 Emergency Line: PMC-CARE or proceed directly to our Emergency Department."
        },
        {

            question: "What are your visiting hours?",
            answer: "We're open 24/7, but visits are encouraged between 8am - 9pm.",

        },

    ];

    useEffect(() => {
        // scroll animations 

        
        ScrollReveal().reveal('.reveal', {
            delay: 200,
            distance: "20px",
            duration: 900,
            easing: "ease-in-out",
            opacity: 0,
           

        });
    },[]);
    return (
        <section className="p-10 reveal " >
            <h2 className="text-3xl medical font-bold text-center mb-20">FAQs</h2>
            <div className="flex flex-wrap justify-center gap-16  items-center text-[20px] ">

                <div className="w-[480px] ">
                    {faqData.map((faq, index) => (
                        <Accordian
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onclick={() =>
                                setIsOpenindex(openIndex === index ? null : index)
                            }
                        />
                    )
                    )}
                </div>

                <div>

                    <img className="faq w-[480px] rounded-2xl" src={faqimage} alt="faq image" />
                </div>


            </div>
        </section>
    );
}

export default Faq