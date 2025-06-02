import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBotResponse } from '../utils/basicBot';

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [botTyping, setBotTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setBotTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(input);
      const botMessage = { sender: 'bot', text: botReply };
      setMessages((prev) => [...prev, botMessage]);
      setBotTyping(false);
    }, 1000); 
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-80 bg-base-100 shadow-xl rounded-lg overflow-hidden border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 bg-blue-400 text-black font-bold">ChatBot Kampus Ghoib</div>
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-2 bg-base-200 text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat ${msg.sender === 'user' ? 'chat-end' : 'chat-start'}`}
                >
                  <div className={`chat-bubble ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                    {msg.text.split('\n').map((line,idx) => (
                        <p key={idx} className="m-0 text-sm leading-tight">{line}</p>
                    ))
                    
                    }
                  </div>
                </div>
              ))}

              {botTyping && (
                <div className="chat chat-start">
                  <div className="chat-bubble bg-gray-300 text-black animate-pulse">...</div>
                </div>
              )}
            </div>
            <div className="p-2 flex border-t bg-base-300">
              <input
                type="text"
                className="input input-bordered flex-grow mr-2"
                placeholder="Tanya sesuatu..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
              />
              <button onClick={handleSend} className="btn bg-blue-400 text-black">
                Kirim
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="btn rounded-full bg-blue-500 text-black shadow-lg"
        onClick={() => setOpen(!open)}
      >
       ChatBot 
      </button>
    </div>
  );
};

export default FloatingChatbot;
