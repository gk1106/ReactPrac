function Chatbot({message,sender}){




    return (
        <div className="chatbot bg-green-100  flex flex-row items-center justify-center p-4 rounded-lg shadow-md mb-4 p-3">
            {sender ==="bot" && <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="Bot Icon" className="w-12 h-12 rounded-full mb-2" />}
            <p className="text-gray-800 p-3">{message}</p>
            {sender ==="user" && <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="User Icon" className="w-12 h-12 rounded-full mb-2" />}
        </div>
    );
}

export default Chatbot;