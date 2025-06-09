import Emergency from "../Images/Emergency.jpg"
import Room from "../Images/Room.jpg"
import Nurse from "../Images/Nurse'.jpg"
import patient from "../Images/Patient.jpg"
import Galleries from "./Galleries"
import picture from "../Images/rep.jpg"
import front from "../Images/front.jpg"


// Gallery sectiuons 
function Gallery() {
    return (

        // gallery styling 
        <>
            <Galleries />
            <div className="flex justify-center  p-3 m-2 ">
            </div>
            <h1 className="text-center about font-semibold text-5xl ">Gallery</h1>
            <section >
                <div className="flex md:flex-row gap-4 p-4 justify-around flex-wrap">

                    <div className="p-2 m-1">
                        <img src={picture} className="rounded-[20px] h-[250px] w-[350px] object-cover" />
                    </div>
                    <div className="p-2 m-1">
                        <img src={Emergency} className="rounded-[20px] h-[250px] w-[350px] object-cover" />
                    </div>
                    <div className="p-2 m-1">
                        <img src={Room} className="rounded-[20px] h-[250px] w-[350px] object-cover" />
                    </div>
                    <div className="p-2 m-1">
                        <img src={Nurse} className="rounded-[20px] h-[250px] w-[350px] object-cover" />
                    </div>

                    <div className="p-2 m-1">
                        <img src={patient} className="rounded-[20px] h-[250px] w-[350px] object-cover" />
                       
                    </div>
                    <div className="p-2 m-1">
                        <img src={front} className="rounded-[20px] h-[250px] w-[350px] object-cover" />
                    </div>
                    
                   
                </div>
            </section>
        </>

    );
}

export default Gallery;