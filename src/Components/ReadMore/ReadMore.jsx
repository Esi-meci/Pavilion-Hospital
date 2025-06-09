import { useEffect } from "react"
import review from "../Images/review.png"
import doctors from "../Images/doctors.png"
import firstAid from "../Images/medicalk.png"
import quality from "../Images/24hours.png"
import AboutUs from "../About/AboutUs.jsx"
import ScrollReveal from "scrollreveal"
import Staffs from "../Staffs/Staffs.jsx"
import aboutvideo from "../Video/aboutvideo1.mp4"
import abou2 from "../Video/abou2.mp4"

function ReadMore() {
    // scrol animations 
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 600,
            duration: 800,
            distance: "20px",
            easing: 'ease-out',
            opacity: 0,
        })

    })
    return (

        // read more styling 

        <>
            <AboutUs />


            <section className="py-10 px-3 md:px-13 reveal">



                <h1 className="text-4xl font-bold text-center about  mb-10">About us</h1>
                <div className="flex justify-center gap-20 flex-wrap read5">
                    <div className="">
                        {/* <img className="w-[380px] rounded-2xl" src={finance} alt="" /> */}
                        <video src={aboutvideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-[580px] rounded-2xl">



                        </video>

                    </div>
                    <div className="w-[350px] content-center ">
                        <p>PMC Medical Center is a leading healthcare facility committed to delivering exceptional medical services with compassion, innovation, and professionalism. We provide comprehensive care across various specialties, using advanced technology and a patient-centered approach to ensure the best outcomes. Our dedicated team of highly trained professionals works around the clock to promote wellness and improve lives</p>
                    </div>


                </div>

                

                <div className="flex gap-20 justify-center mt-32 mb-36 flex-wrap read5" >
                    <div className="w-[350px] content-center">
                        <h1 className="font-semibold about capitalize text-2xl mb-2">why choose us</h1>
                        <p className="  ">PMC Medical Center is a leading healthcare facility committed to delivering exceptional medical services with compassion, innovation, and professionalism. We provide comprehensive care across various specialties, using advanced technology and a patient-centered approach to ensure the best outcomes. Our dedicated team of highly trained professionals works around the clock to promote wellness and improve lives</p>
                    </div>

                    <div className="">
                        {/* <img className="w-[380px] rounded-2xl" src={finance} alt="" /> */}
                        <video src={abou2}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-[580px] rounded-2xl">

                        </video>
                    </div>
                </div>




                <div className="flex justify-around text-center  flex-wrap reveal read5 md:gap-10 gap-5 mb-20">

                    <div className="w-[500px]  readmore p-5 shadow-gray-300 shadow-lg rounded">
                        <h1 className="about text-2xl text-center capitalize font-semibold tracking-wide">mission</h1>
                        <p className="leading-7  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed earum molestiae. Facere maiores rerum veritatis, possimus architecto quis cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum officiis nostrum quisquam tempore! Soluta beatae dolores eius modi rem amet voluptatum, deleniti, dolore exercitationem vel necessitatibus aperiam obcaecati quas.</p>

                    </div>
                    <div className="  w-[500px]  readmore p-5 shadow-gray-300 shadow-lg rounded" >
                        <h1 className="about text-2xl text-center capitalize font-semibold tracking-wide">vission</h1>
                        {/* <p className="leading-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem sequi sunt dolorem a minima voluptatibus aspernatur provident praesentium atque.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum officiis nostrum quisquam tempore! Soluta beatae dolores eius modi rem amet voluptatum, deleniti, dolore exercitationem vel necessitatibus aperiam obcaecati quas.</p> */}
                        <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed earum molestiae. Facere maiores rerum veritatis, possimus architecto quis cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum officiis nostrum quisquam tempore! Soluta beatae dolores eius modi rem amet voluptatum, deleniti, dolore exercitationem vel necessitatibus aperiam obcaecati quas.</p>


                    </div>

                </div>



                <div className="flex flex-wrap flex-col gap-15 tracking-wide leading-7 mt-28 reveal">
                    <div className="flex justify-center flex-wrap gap-10 read5 ">

                        <div className="content-center  " >
                            <img className="w-[100px] icon item-center" src={doctors} alt="review image" />
                        </div>

                        <div className="w-[800px] readmore p-5 shadow-gray-200 shadow-lg rounded ">
                            <h1 className="font-bold capitalize  mb-2 about text-2xl">skilled & experienced doctors</h1>

                            <p className="text-[15px] p-2">At PMC Medical Center, our team consists of experienced, board-certified doctors across various specialties including cardiology, internal medicine, pediatrics, surgery, orthopedics, and more. Each doctor is handpicked for their skill, compassion, and dedication to improving lives.

                                We follow a strict hiring and continuous evaluation process to ensure our physicians stay at the forefront of medical advancements. From accurate diagnosis to effective treatment plans, you’re in the hands of professionals who prioritize your well-being. Our multidisciplinary approach ensures collaborative care that leads to faster, more holistic recovery.</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-10 read5 ">

                        <div className="content-center  " >
                            <img className="w-[100px] icon" src={review} alt="review image" />
                        </div>

                        <div className="w-[800px] readmore p-5 shadow-gray-200 shadow-lg rounded">
                            <h1 className="font-bold capitalize mb-2 about text-2xl">positive patients reviews</h1>

                            <p className="text-[15px] p-2">Our patients are our best ambassadors. Over the years, thousands of individuals and families have placed their trust in PMC Medical Center — and their reviews speak volumes. From first-time visits to long-term treatments, patients consistently praise our attentive staff, quick response times, transparent communication, and the genuine care they receive.

                                We believe feedback is a gift, and we use patient reviews to continuously improve. We’re proud to maintain high satisfaction ratings and to have built strong, long-lasting relationships with our community through integrity, compassion, and trust.</p>                    </div>
                    </div>


                    <div className="flex justify-center flex-wrap gap-10 read5 ">

                        <div className="content-center icon" >
                            <img className="w-[100px]" src={firstAid} alt="review image" />
                        </div>

                        <div className="w-[800px] readmore p-5 shadow-gray-200 shadow-lg rounded">
                            <h1 className="font-bold capitalize mb-2 about text-2xl">latest medical equipment</h1>

                            <p className="text-[15px] p-2">Innovation is key to providing effective and efficient care. PMC Medical Center is equipped with state-of-the-art medical technology that supports faster diagnostics, minimally invasive procedures, and enhanced patient outcomes.

                                We regularly update our equipment to include the latest in imaging (MRI, CT scans, digital X-rays), laboratory diagnostics, surgical tools, and monitoring systems. This allows our medical professionals to make quicker, more accurate decisions and gives patients peace of mind knowing they’re receiving the best modern care available.</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-10 read5 ">

                        <div className="content-center">
                            <img className="w-[100px] icon" src={quality} alt="review image" />
                        </div>

                        <div className="w-[800px] readmore p-5 shadow-gray-200  shadow-lg rounded">
                            <h1 className="font-bold capitalize mb-2 about text-2xl">Quality healthcare service</h1>

                            <p className="text-[15px] p-2">Quality healthcare at PMC goes beyond just medical procedures — it’s about delivering excellence in every moment of your experience. We’ve built a seamless patient journey that includes swift registration, knowledgeable consultations, empathetic support staff, timely diagnostics, and personalized care plans.

                                We adhere to both local and international standards of medical service, backed by strict protocols for hygiene, safety, and patient confidentiality. From preventive care to complex procedures, we aim for precision, comfort, and outstanding results — every time.</p>
                        </div>
                    </div>




                </div>



            </section>
            <Staffs />
        </>
    );
};


export default ReadMore;



