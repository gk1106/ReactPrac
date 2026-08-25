import Input from "./Components/Input";
import ChatMessage from "./Components/ChatMessage";
import dayjs from "dayjs";
import { useState } from "react";

function App() {

      const [Messages,setMessages]=useState([]);
       const time=dayjs().format('h:mm A');

        
  return (
            <div className="h-screen bg-gradient-to-br from-blue-300 via-red-700 to-pink-300 flex justify-center items-center">
                <div className="w-[800px] h-[900px] bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col">

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <ChatMessage messages={Messages} time={time} />
                    </div>

                    {/* Input */}
                    <Input setMessages={setMessages} />

                </div>
            </div>
  )
}

export default App;