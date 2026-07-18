import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([
    { sender: 'bot', text: 'Hi! I am Shivani\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const userInput = input.toLowerCase();
    setInput('');

    setTimeout(() => {
      let botResponse = "I'm still learning! Please contact Shivani at shibupatel013@gmail.com for more details.";
      if (userInput.includes('projects')) {
        botResponse = "Shivani has built some amazing projects like BrainsGPT (an AI multi-modal chatbot) and QuickBlog (a MERN stack blogging platform).";
      } else if (userInput.includes('skills')) {
        botResponse = "She is skilled in the MERN Stack, Java, Azure, and Tailwind CSS.";
      } else if (userInput.includes('contact')) {
        botResponse = "You can reach her at shibupatel013@gmail.com or connect on LinkedIn!";
      } else if (userInput.includes('hire') || userInput.includes('job')) {
        botResponse = "Shivani is actively looking for Software Engineer roles! I highly recommend checking out her resume and reaching out via email.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 glass-card rounded-2xl overflow-hidden z-50 flex flex-col shadow-2xl border border-white/20"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Shivani's Assistant</h3>
                  <p className="text-white/70 text-xs">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/60">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-white/10 text-gray-200 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-black/80 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
