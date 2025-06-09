
// import doctors from "../Images/doctors.png"
// import Button from "../Button/Button"
// import services from "../Images/servicess.jpg"
// import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';


// function About() {
// //  scroll  animation 
//     useEffect(() => {
//         ScrollReveal().reveal('.reveal', {
//           delay: 200,
//           distance: '20px',
//           duration: 800,
//           easing: 'ease-out',
//           opacity: 0,
         
//         });
//       }, []);

    
//     return (
//       // nav styling 
    
//         <section id="about" className="mt-16 mb-20 px-3 min-h-[600px]">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
//           {/* Left Image */}
//           <div className="max-w-[490px] w-full">
//             <img src={services} alt="PMC Services" className="w-full rounded-2xl" />
//           </div>
      
//           {/* Right Content */}
//           <div className="max-w-full">
//             <div>
//               <h1 className="text-[40px] font-bold text-[#007bff]">Who we are</h1>
//               <h1 className="text-3xl font-bold capitalize text-black">Your Health, Our Priority</h1>
//               <p className="text-[15px] text-gray-600 font-light leading-[22px] mt-2">
//                 PMC Medical Center is a leading healthcare provider dedicated to delivering exceptional, patient-centered care...
//               </p>
//             </div>
      
//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 text-center mt-5">
//               {/* Individual Card */}
//               <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-xl p-3">
//                 <img src={doctors} alt="Doctors" className="w-12 icon mx-auto mb-2" />
//                 <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
//                 <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
//                 <Button href="/about" className="font-semibold capitalize mt-1">Read More</Button>
//               </div>
//               <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-xl p-3">
//                 <img src={doctors} alt="Doctors" className="w-12 mx-auto mb-2" />
//                 <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
//                 <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
//                 <Button href="/about" className="font-semibold capitalize mt-1">Read More</Button>
//               </div>
//               <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-xl p-3">
//                 <img src={doctors} alt="Doctors" className="w-12 mx-auto mb-2" />
//                 <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
//                 <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
//                 <Button href="/about" className="font-semibold capitalize mt-1">Read More</Button>
//               </div>
//               <div className="max-w-[290px] mx-auto text-[12px] leading-5 bg-white border-2 border-white rounded-xl p-3">
//                 <img src={doctors} alt="Doctors" className="w-12 mx-auto mb-2" />
//                 <h1 className="font-bold capitalize mb-1">Skilled & Experienced Doctors</h1>
//                 <p>Our hospital is home to a team of highly qualified and skilled doctors across multiple specialties, with years of experience.</p>
//                 <Button href="/about" className="font-semibold capitalize mt-1">Read More</Button>
//               </div>
      
             
//             </div>
//           </div>
//         </div>
//       </section>
      
//     );
// }


// export default About;