import mobile2 from "../Images/pmcmobile.jpg"
import google from "../Images/play.png"
import store from "../Images/store.png"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function Mobile() {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 200,
            distance: '20px',
            duration: 900,
            easing: 'ease-in',
            opacity: 0,

        });
    }, []);
    return (
        <section className="p-10 mt-10 ">
            <div className="flex justify-around items-center flex-wrap reveal ">
                <div className="w-[750px] ">

                    <h1 className="mobile text-6xl font-bold capitalize ">care on the go</h1>
                    <h1 className="text-5xl font-extralight tracking-wider capitalize mt-3.5 mb-3.5">download mobile app</h1>
                    <p className="text-2xl font-extralight text-gray-500">Download our mobile app to shop for drugs and supplements on the go, and book appointments with doctors who truly care about your health. </p>
                    <div className=" flex gap-10  ">

                        <div >


                            <a href="https://www.apple.com/app-store/" target="blank"> <img className="w-44 " src={store} alt=""

                            /> </a>


                        </div>
                        <div >
                            <a href="https://play.google.com/store/apps?hl=en&pli=1" target="blank" >


                                <img className="w-44" src={google} alt="" />
                            </a>

                        </div>
                    </div>
                </div>


                <div>
                    <img className="w-[400px] " src={mobile2} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Mobile;