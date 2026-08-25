import ChatBubble from "./ChatBubble";
import dayjs from "dayjs";

import { useRef,useEffect } from "react";

function ChatMessage(props){
    //console.log(Chatbot);

     const bottomRef=useRef(null);
    //  const time=dayjs(props.time).valueOf();
   


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
            time={props.time}
            key={crypto.randomUUID()}
            />
        })}

        <div ref={bottomRef}></div>
        </>
    );
}
export default ChatMessage;