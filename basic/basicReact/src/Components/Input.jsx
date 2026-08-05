import ChatMessage from "./ChatMessage";
import { useState } from "react";
import Chatbot from "./chatbot";

function Input({ setMessages }) {
    const [text, setText] = useState('');

   const handleSend =async () => {
        setMessages((prev)=>[
         ...prev,
         {
            id: crypto.randomUUID(),
            message:text,
            sender:"user"
         },

        ]);
         const reply = await Chatbot.getResponseAsync(text);

              setMessages((prev)=>[
         ...prev,
         {
            id: crypto.randomUUID(),
            message:reply,
            sender:"bot"
         },

        ]);
       
       setText("");
    };

 


    return (
        <div className="input-container bg-white-800  flex justify-center items-center p-4 rounded-lg shadow-md mb-4">
            <input type="text" placeholder="Enter text here" className="bg-transparent border-none focus:outline-none"
             value={text} onChange={(s)=>setText(s.target.value)}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleSend} >Send</button>
        </div>
    );
}
export default Input;