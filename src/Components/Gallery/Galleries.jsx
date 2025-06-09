import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Hero/Hero.css";
import gallary1 from "../Images/gallery1.jpg"
import gallar2 from "../Images/gallery2.jpg"


// galleries data 
const images = [
    {
      src: gallary1,
      title: "Quality Healthcare for Everyone",
      subtitle: "We deliver compassionate, advanced medical care with expert doctors.",
    },
    {
      src: gallar2,
      title: "Modern Facilities & 24/7 Support",
      subtitle: "State-of-the-art equipment and emergency services always available.",
    },
  ];


  function Galleries() {

    // gallery functionality 
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      images.forEach((img) => {
        const preload = new Image();
        preload.src = img.src;
      });
    }, []);
    
    const handlePrev = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    };
  
    return (

      // gallery styling 
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt="carousel"
              className="w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
  
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
  
          <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white z-10 max-w-3xl">
            <h1 className="text-5xl font-semibold text-blue-100 mb-4 tracking-wide us">
              {images[currentIndex].title}
            </h1>
            <p className="text-xl leading-relaxed us1">
              {images[currentIndex].subtitle}
            </p>
          </div>
  
          <button
            onClick={handlePrev}
            className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow-md z-20 hover:bg-blue-50"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow-md z-20 hover:bg-blue-50"
          >
            ❯
          </button>
        </div>
      </div>
    );
  }
  
  export default Galleries;
  
  