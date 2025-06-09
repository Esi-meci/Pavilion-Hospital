import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import appoint from "../Images/appoint.jpg"
import Button from "../Button/Button";

function Appointment() {
  // appointment section 

  const [currentDateTime, setCurrentDateTime] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });


  // current date/time

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      const localISOTime = new Date(now - offset).toISOString().slice(0, 16);
      return localISOTime;
    };

    setCurrentDateTime(getCurrentDateTime());
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create appointment object
    const appointment = {
      ...formData,
      datetime: currentDateTime,
      id: Date.now() // Unique ID for each appointment
    };

    try {
      // Get existing appointments or initialize empty array
      const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

      // Add new appointment
      const updatedAppointments = [...existingAppointments, appointment];

      // Save to localStorage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

      // Reset form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        message: ""
      });
      setCurrentDateTime(new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 16));

      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };


  return (

    <section id="appointment" className="mt-56 p-10  " >
      <h1 className="text-3xl font-semibold medical capitalize text-center">make an appointment</h1>
      <h1 className="text-5xl font-semibold capitalize text-center mb-10">We are here for you</h1>
      <div className="flex gap-10 flex-wrap items-center  justify-center ">

        <div className="items-center">
          <img className="rounded-2xl w-[480px]" src={appoint} alt="" />
         
        </div>
        <div className="">



          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {/* Name */}
              <div className="flex-1">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  required
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Enter Full Name"
                  className="w-full max-w-sm p-3 border user-valid:border-green-500 user-invalid:border-red-500 border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full max-w-sm p-3 border user-valid:border-green-500 user-invalid:border-red-500 border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  required
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  className="w-full max-w-sm p-3 border user-valid:border-green-500 user-invalid:border-red-500 border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              {/* DateTime */}
              <div className="flex-1">
                <input
                  type="datetime-local"
                  name="datetime"
                  id="datetime"
                  value={currentDateTime}
                  onChange={(e) => setCurrentDateTime(e.target.value)}
                  className="w-full max-w-sm p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none"
                />
              </div>


              <div className="col-span-1 md:col-span-2">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow shadow-gray-300 resize-none focus:outline-none"
                ></textarea>
              </div>
            </div>

      
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                type="submit"
                className="shine-button bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3 rounded-[5px] text-[13px] font-semibold capitalize"
                content="book appointment"
              />
              <Link to={"/ViewAppointments"} className="shine-button bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3 rounded-[5px] text-[13px] font-semibold capitalize">View Appointment</Link>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}


export default Appointment