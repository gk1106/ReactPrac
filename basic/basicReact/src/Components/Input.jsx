import ChatBubble from "./ChatBubble";
import { useState,useEffect,useRef } from "react";
import Chatbot from "./chatbot";

function Input({ setMessages }) {
    const [text, setText] = useState('');

    const [loading, setLoading] = useState(false);

           const inputRef=useRef(null);

          


           useEffect(()=>{

            inputRef.current?.focus();

           },[]);

           

            const handleSend =async () => {
                    if (!text.trim()) return;

                if (loading) return;
                    setMessages((prev)=>[
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        message:text,
                        sender:"user"
                    },

                    ]);

                {loading && (
                <p className="text-gray-400 text-sm">
                    Bot is typing...
                </p>
            )}

                    setLoading(true);
                    const reply = await Chatbot.getResponseAsync(text);
                    setLoading(false);

                        setMessages((prev)=>[
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        message:reply,
                        sender:"bot"
                    },

                    ]);
                
                setText("");
                    inputRef.current?.focus();
                };

            const handleKeydown = (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                } else if (e.key === "Escape") {
                    setText("");
                }
            };

 


    return (
        <div className="input-container bg-white-800  flex justify-between items-center p-4 rounded-lg shadow-md mb-4">
            <input type="text" placeholder="Send a message to ChatBot" className="w-full px-3 py-2 bg-transparent text-white border rounded-md focus:outline-none"
             value={text} onChange={(s)=>setText(s.target.value)} 
             ref={inputRef}
             onKeyDown={handleKeydown} 
             />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" 
             disabled={loading}

            onClick={handleSend} > {loading ? "Thinking..." : "Send"}</button>
        </div>
    );
}
export default Input;