import blog2 from "../Images/blog2.jpg"
import mens from "../Images/mens.webp"
import blog4 from "../Images/blog4.webp"
import breast from "../Images/breast.png"
// import Button from "../Button/Button"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"


// blog section 

function Blog() {

    // scroll animation  
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 100,
            distance: "100px",
            duration: 900,
            easing: "ease-in-out",
            opacity: 0,

        }
        )

    })

    // blog styling 
    return (
        <section className="mt-3.5 reveal ">
            <div className="text-center capitalize p-3.5 mb-5">
                <h1 className="medical text-3xl font-bold ">blog post</h1>
                <h1 className="text-5xl font-bold">our latest news</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  capitalize p-3 ">

                <div className="relative  flex flex-col items-center w-fill md:max-w-[350px]   mx-auto  blog ">
                    <img className="w-[290px] rounded" src={blog2} alt="blog2 image" />


                    <div className="w-60 px-3 p-5 news2  bg-white rounded shadow-2xl -m-10 z-10 blog2 ">
                        <p className="text-[10px] font-semibold news  rounded capitalize text-center px-1 w-20 py-1 text-white">10 mar,2025</p>

                        <h1 className="text-[18px] font-bold tracking-wider">Navigating Abnormal Pap Results</h1>

                        {/* <Button className="capitalize cursor-pointer read1 font-semibold" content="read more ↗︎"  > </Button> */}
                    </div>
                </div>


                <div className="relative  flex flex-col items-center w-fill md:max-w-[350px] blog mx-auto  " >
                    <img className="w-[290px] rounded " src={mens} alt="men image" />

                    <div className="w-60 px-3 p-5 news2 bg-white rounded shadow-2xl -m-10 z-10 blog2 ">
                        <p className="text-[10px] font-semibold news text-center capitalize rounded px-1 w-20 py-1 text-white ">12 jul,2025</p>

                        <h1 className="text-[18px] font-bold tracking tracking-wider">Navagating mens health for decades

                        </h1>


                        {/* <Button className="capitalize cursor-pointer read1 font-semibold" content="read more ↗︎"  > </Button> */}
                    </div>
                </div>


                {
                    <div className="flex flex-col  items-center w-fill md:max-w-[350px] mx-auto relative blog ">
                        <img className="w-[290px] rounded " src={blog4} alt="blog4 image" />


                        <div className="w-60 px-3 p-5 news2 bg-white rounded shadow-2xl -m-10 z-10 blog2 ">
                            <p className="text-[10px] font-semibold news text-center capitalize rounded px-1 w-20 py-1 text-white">22 aug,2025</p>

                            <h1 className="text-[18px] font-bold tracking-wider">Navigating the Waves of Type 2 Diabetes</h1>

                            {/* <Button className="capitalize cursor-pointer read1 font-semibold" content="read more ↗︎"  > </Button> */}
                        </div>
                    </div>}

                <div className="relative  flex flex-col items-center w-fill md:max-w-[350px]   mx-auto blog " >
                    <img className="w-[290px] rounded " src={breast} alt="breast image" />

                    <div className="w-60  px-5 p-5 news2 bg-white rounded shadow-2xl  -m-10 z-10 blog2 ">
                        <p className="text-[10px] font-semibold news text-center capitalize rounded px-1 w-20 py-1 text-white">1 dec,2025</p>

                        <h1 className="text-[18px] font-bold tracking tracking-wider">Breast cancer awareness month

                        </h1>

                        {/* <Button className="capitalize cursor-pointer read1 font-semibold" content="read more ↗︎"  > </Button> */}
                    </div>
                </div>

 

            </div>
        </section>
    );
}

export default Blog;