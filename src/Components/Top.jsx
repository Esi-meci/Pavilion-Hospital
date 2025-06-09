import up from "../Components/Images/top.png"

function Top() {
    return (
        
        <div id="up"  className="fixed bottom-18 right-5 z-50 bg-blue-600 text-white p-3.5  rounded-full shadow-lg hover:bg-blue-700 transition text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img className="w-5 text-white " src={up} alt="arrow image" />
         
           
        </div>
   
    );
}


export default Top;