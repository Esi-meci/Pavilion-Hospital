


function Accordian({ question, answer, isOpen, onclick }) {




    return (
        <div className="border-b py-3">
            <button
                className="w-full font-semibold flex justify-between  cursor-pointer"
                onClick={onclick}
            >
                {question}
                <span className="about text-xl cursor-pointer">{isOpen ? "-" : "+"}</span>
            </button>
            <div
                className={`transition-all duration-250 overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="mt-2 text-[17px] text-gray-600">{answer}</p>
            </div>
        </div>

    );
}


export default Accordian;