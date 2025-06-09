// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";

// function Navbar  (){
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(null);

//   return (
//     <nav className="bg-blue-600 text-white shadow-md fixed w-full z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <a href="/" className="text-2xl font-bold">🏥 MyHospital</a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="/" className="hover:text-gray-200">Home</a>
//           <a href="/about" className="hover:text-gray-200">About Us</a>
          
//           {/* Services Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center hover:text-gray-200"
//               onClick={() => setDropdown(dropdown === "services" ? null : "services")}
//             >
//               Services <ChevronDown size={16} className="ml-1" />
//             </button>
//             {dropdown === "services" && (
//               <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded-md p-2">
//                 <a href="/services/cardiology" className="block px-4 py-2 hover:bg-gray-100">Cardiology</a>
//                 <a href="/services/surgery" className="block px-4 py-2 hover:bg-gray-100">Surgery</a>
//                 <a href="/services/pediatrics" className="block px-4 py-2 hover:bg-gray-100">Pediatrics</a>
//               </div>
//             )}
//           </div>

//           {/* Doctors Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center hover:text-gray-200"
//               onClick={() => setDropdown(dropdown === "doctors" ? null : "doctors")}
//             >
//               Doctors <ChevronDown size={16} className="ml-1" />
//             </button>
//             {dropdown === "doctors" && (
//               <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded-md p-2">
//                 <a href="/doctors/specialists" className="block px-4 py-2 hover:bg-gray-100">Specialists</a>
//                 <a href="/doctors/surgeons" className="block px-4 py-2 hover:bg-gray-100">Surgeons</a>
//                 <a href="/doctors/nurses" className="block px-4 py-2 hover:bg-gray-100">Nurses</a>
//               </div>
//             )}
//           </div>

//           <a href="/contact" className="hover:text-gray-200">Contact</a>
//           <a href="/pharmacy" className="hover:text-gray-200">Pharmacy</a>
//           <a href="/blog" className="hover:text-gray-200">Blog</a>

//           <a href="/appointment" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">
//             Book Appointment
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-blue-600 text-white p-4 space-y-4">
//           <a href="/" className="block">Home</a>
//           <a href="/about" className="block">About Us</a>
//           <a href="/contact" className="block">Contact</a>
//           <a href="/pharmacy" className="block">Pharmacy</a>
//           <a href="/blog" className="block">Blog</a>
//           <a href="/appointment" className="block bg-white text-blue-600 px-4 py-2 rounded-md">Book Appointment</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
