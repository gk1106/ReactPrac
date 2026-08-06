import ChatBubble from "./ChatBubble";

import { useRef,useEffect } from "react";

function ChatMessage(props){
    //console.log(Chatbot);

     const bottomRef=useRef(null);


     useEffect(()=>{
        bottomRef.current?.scrollIntoView({
        behavior: "smooth"
    });


     },[props.messages])

     

    return (
        <>
        {props.messages.map((msg)=>{

            return <ChatBubble 
            message={msg.message}
            sender ={msg.sender}
            key={crypto.randomUUID()}
            />
        })}

        <div ref={bottomRef}></div>
        </>
    );
}
export default ChatMessage;