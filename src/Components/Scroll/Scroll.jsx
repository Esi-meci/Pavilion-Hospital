// import { useState } from "react";
// import sales from "../Images/sales.jpg"
// import finance from "../Images/finance.jpg"

// const testimonials = [
//     {
//       name: "Willson",
//       role: "Emergency Care Visitor",
//       image: finance,
//       message:
//         "I came in during a late-night emergency, and the response was fast, organized, and compassionate. From the front desk to the doctors, everyone treated me with care and urgency.",
//     },
//     {
//       name: "David",
//       role: "Eye Surgery Patient",
//       image: sales,
//       message:
//         "I was nervous about getting eye surgery, but from my first consultation to the post-op care, the team was exceptional. The doctors explained everything clearly, and the recovery process was smooth.",
//     },
//     {
//       name: "Angela",
//       role: "Maternity Patient",
//       image: finance,
//       message:
//         "The maternity ward made my delivery experience calm and joyful. The nurses were so helpful throughout my stay.",
//     },
//     {
//       name: "James",
//       role: "Orthopedic Patient",
//       image: sales,
//       message:
//         "After a sports injury, I was treated and guided through recovery perfectly. The orthopedic team really knows their stuff.",
//     },
//   ];
  
//   export default function Testimonials() {
//     const [startIndex, setStartIndex] = useState(0);
//     const itemsPerPage = 2;
  
//     const prev = () => {
//       setStartIndex((prevIndex) =>
//         prevIndex - itemsPerPage < 0
//           ? testimonials.length - itemsPerPage
//           : prevIndex - itemsPerPage
//       );
//     };
  
//     const next = () => {
//       setStartIndex((prevIndex) =>
//         prevIndex + itemsPerPage >= testimonials.length
//           ? 0
//           : prevIndex + itemsPerPage
//       );
//     };
  
//     const visibleTestimonials = testimonials.slice(
//       startIndex,
//       startIndex + itemsPerPage
//     );
  
//     return (
//       <section className="mt-20 mb-20">
//         <div className="p-10 flex gap-7 justify-around flex-wrap reveal">
//           {/* Intro Text */}
//           <div className="w-96">
//             <p className="about font-bold mb-3.5">20+ years of experience </p>
//             <h1 className="text-5xl text-gray-800 mb-3.5">
//               what our patients say about us{" "}
//             </h1>
//             <p>
//               At PMC Hospital, our patients are at the heart of everything we do.
//               From the moment you walk through our doors, your care, comfort, and
//               recovery become our top priority.
//             </p>
//           </div>
  
//           {/* Carousel Section */}
//           <div className="flex gap-4 flex-wrap items-start">
//             {/* Prev Button */}
//             <button
//               onClick={prev}
//               className="h-fit bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300 px-3 py-1 rounded hover:bg-blue-700"
//             >
//              ◀︎
//             </button>
  
//             {/* Testimonials */}
//             {visibleTestimonials.map((item, index) => (
//               <div key={index} className="flex gap-6 items-start flex-wrap">
//                 <img className="testimonials" src={item.image} alt={item.name} />
//                 <div className="flex-wrap">
//                   <p className="capitalize text-[20px] font-semibold tracking-wide">
//                     {item.name}
//                   </p>
//                   <h1 className="capitalize">{item.role}</h1>
//                   <p className="w-56 p-5 text-left bg-gray-500 text-white text-[15px] shadow-xl shadow-gray-700 ">
//                     "{item.message}"
//                   </p>
//                 </div>
//               </div>
//             ))}
  
//             {/* Next Button */}
//             <button
//               onClick={next}
//               className="h-fit bg-black text-gray-300 px-3 py-1 rounded "
//             >
//                ► 
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }