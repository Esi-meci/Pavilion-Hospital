// import { useState, useEffect } from "react";
// import willson from "../Images/Anthony.jpg"
// import david from "../Images/Anthony.jpg"
// import mary from "../Images/Anthony.jpg"
// import james from "../Images/Anthony.jpg"

// function Body() {

//   const testimonials = [
//     {
//       name: "Willson",
//       role: "Emergency Care Visitor",
//       review:
//         "I came in during a late-night emergency, and the response was fast, organized, and compassionate. The doctors are really skilled!",
//       image: willson,
//     },
//     {
//       name: "David",
//       role: "Eye Surgery Patient",
//       review:
//         "I was nervous about getting eye surgery, but from my first consultation to the post-op care, everything was seamless and reassuring.",
//       image: david,
//     },
//     {
//       name: "Mary",
//       role: "Maternity Patient",
//       review:
//         "The delivery experience at PMC was smooth and safe. The nurses were incredibly caring.",
//       image: mary,
//     },
//     {
//       name: "James",
//       role: "Dental Care Patient",
//       review:
//         "I used to be afraid of dentists until I visited PMC. The environment is calm and the professionals are excellent.",
//       image: james,
//     },
//   ];


//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isHovered]);
//   const { name, role, review, image } = testimonials[currentIndex];
//   return (
//   <section className="p-10 flex  gap-7 justify-around ">
//  <div className="w-96">

// <p className="about font-bold mb-3.5">20+ years of experience </p>
// <h1 className="text-5xl text-gray-800 mb-3.5">what our patients say about us </h1>
// <p>At PMC Hospital, our patients are at the heart of everything we do. From the moment you walk through our doors, your care, comfort, and recovery become our top priority.</p>
// </div>


//     <div
//       className="flex justify-between gap-6"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       >
//       <img
//         src={image}
//         alt={name}
//         className="w-16 h-16 rounded-full mb-4 object-cover"
//         />
//       <h3 className="text-blue-600 font-semibold">- {name}</h3>
//       <p className="text-gray-500 text-sm">{role}</p>
//       <p className="text-gray-700 italic text-lg mb-4">“{review}”</p>
//     </div>
//         </section>
//   )
// }


// export default Body;