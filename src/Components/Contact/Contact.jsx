


import { useEffect, useState } from "react";
import Button from "../Button/Button";
import ScrollReveal from "scrollreveal";
import ContactPage from "./ContactPage";



export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        concern: '',
        message: ''
    });

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 100,
            distance: "20px",
            duration: 800,
            easing: "ease-in-out",
            opacity: 0,
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Save to localStorage
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push({
            ...formData,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Show simple alert
        alert("Message sent successfully!");
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            number: '',
            concern: '',
            message: ''
        });
    };




    return (
        <>
<ContactPage/>


            <section className="py-16 px-5 md:px-20 bg-gray-100 reveal">
                <h2 className="text-3xl font-bold text-center about text-gray-800 mb-10">
                    Contact Us
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-start">

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                            <p className="text-gray-700">
                                PMC Hospital, Tafawa Balewa Square, Victoria Island, Lagos, Nigeria.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-gray-700">+234-810-149-265</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-700">PeoplesMedicalCenter@pmc.com</p>
                        </div>


                        <form className="space-y-4 " onSubmit={handleSubmit}>
                            <div className="flex justify-between flex-wrap">

                                <div>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className=" p-3 border border-gray-300 rounded w-full md:w-[203px]"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className=" p-3 border border-gray-300 rounded w-full md:w-[203px]"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div>

                                <input 
                                    type="number"
                                    name="number"
                                    placeholder="Your Number"
                                    className=" p-3 border border-gray-300 rounded w-full "
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div >



                                <select
                                    id="subjects"
                                    name="concern"
                                    className=" p-3 border border-gray-300 w-full  rounded "
                                    value={formData.concern}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value=""> Select a concern </option>
                                    <option value="cancer">Cancer</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="dental">Dental</option>
                                    <option value="dermatology">Dermatology</option>
                                    <option value="mental-health">Mental Health</option>
                                    <option value="orthopedics">Orthopedics</option>
                                    <option value="pediatrics">Pediatrics</option>
                                    <option value="surgery">Surgery</option>
                                    <option value="Others">Others</option>


                                </select>

                            </div>
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="Your Message"
                                className="w-full p-3 border border-gray-300 rounded resize-none "
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {/* <button
                            type="submit"
                            className="shine-button  text-[13px] bg-gradient-to-l from-cyan-500 to-blue-500 capitalize text-white px-7 py-3 rounded-[5px] font-semibold "
                            >
                            Send Message
                            </button> */}
                            <Button className="shine-button  text-[13px] bg-gradient-to-l from-cyan-500 to-blue-500 capitalize text-white px-7 py-3 rounded-[5px] font-semibold " type="submit" content="send message" />
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md m-auto content-center">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63435.52756445389!2d3.3488503941479006!3d6.429944607708279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52dc0328169%3A0x7885a1a33689a576!2sVictoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1744826277958!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                </div>

            </section>

        </>
    );
}