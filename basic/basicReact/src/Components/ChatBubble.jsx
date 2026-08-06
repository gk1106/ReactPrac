function ChatBubble({ message, sender }) {
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

        <p className="text-white px-3 break-words">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;