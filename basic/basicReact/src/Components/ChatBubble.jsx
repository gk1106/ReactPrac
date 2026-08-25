function ChatBubble({ message, sender ,time }) {
  return (
    <div
      className={`flex mb-4 ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-center p-4 rounded-xl shadow-lg backdrop-blur-lg border max-w-[75%] ${
          sender === "user"
            ? "bg-blue-500/20 border-blue-400/20 flex-row-reverse"
            : "bg-zinc-800/40 border-zinc-600/30"
        }`}
      >
        <img
          src={
            sender === "user"
              ? "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" 
              : "https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          }
          alt={sender}
          className="w-12 h-12 rounded-full"
        />

        <div className="flex flex-col px-3">
          <p className="text-white break-words">
            {message}
          </p>

          <span className="text-gray-400 text-xs text-right mt-1">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;