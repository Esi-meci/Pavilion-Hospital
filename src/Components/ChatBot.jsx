import { useState } from "react";
import { MessageCircle } from "lucide-react";



const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We're open 24/7 for your convenience.",
  },
  {
    question: "How can I book an appointment?",
    answer: "Click the 'Appointment' button on our homepage or call us directly.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major health insurance providers.",

  },
  {
    question:"How good is your healthcare ",
    answer: "Our healthcare serivces is top notch we provide you with lastest equipments and experienced doctors. "
  },
  
];

const FAQChatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleQuestionClick = (faq) => {
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: faq.question },
      { sender: "bot", message: faq.answer },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 ">
      {/* Chat toggle button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="bg-blue-600 text-white p-3  rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {chatOpen && (
        <div className="w-80   bg-white border-2 border-blue-500 rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-2 font-semibold">
            <span>💬  PMC Assistant</span>
            <button onClick={() => setChatOpen(false)} className="cursor-pointer  font-extrabold text-xl">
              -
            </button>
          </div>

          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-2 rounded-lg ${
                  chat.sender === "user"
                    ? "bg-blue-200 self-end ml-auto"
                    : "bg-gray-100 self-start"
                }`}
              >
                {chat.message}
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="border-t px-3 py-2 bg-gray-50">
            <p className="text-xs text-gray-500 mb-2 ">Tap a question below 👇</p>
            <div className="grid gap-2">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(faq)}
                  className="cursor-pointer text-left text-sm bg-blue-50 hover:bg-blue-100 p-2 rounded"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQChatbot;
