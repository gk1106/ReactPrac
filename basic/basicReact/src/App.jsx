
import Chatbot from "./Components/Chatbot";
import Input from "./Components/Input";
import ChatMessage from "./Components/ChatMessage";
import { useState } from "react";

function App() {

      const [Messages,setMessages]=useState(['']);
  return (
<div className="h-screen bg-gradient-to-br from-blue-100 via-white-500 to-blue-300 flex justify-center items-center">
  <div className="w-[500px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-6">
   

  
    <ChatMessage  messages={Messages}/>
    <Input setMessages={setMessages}/>

    </div>
    </div>
  )
}

export default App;