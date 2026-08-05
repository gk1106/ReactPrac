import Chatbot from "./Chatbot";

function ChatMessage(props){
    

    return (
        <>
        {props.messages.map((msg)=>{

            return <Chatbot 
            message={msg.message}
            sender ={msg.sender}
            key={crypto.randomUUID()}
            />
        })}
        </>
    );
}
export default ChatMessage;