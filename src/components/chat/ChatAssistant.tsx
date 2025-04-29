
import { MessageSquare, X, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! 👋 I\'m your Career Assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date(),
    }
  ]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isMinimized) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAssistantResponse(inputValue),
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };
  
  const getAssistantResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('book') || input.includes('appointment') || input.includes('advising')) {
      return "To book an advising session, go to the 'Book Advising' page. Would you like me to help you find an available time slot?";
    } else if (input.includes('resume') || input.includes('cv')) {
      return "I can help with resume tips! You can also upload your resume for review by an advisor through the Quick Actions menu.";
    } else if (input.includes('internship') || input.includes('job')) {
      return "Check out the Internship Opportunities card on your dashboard for the latest openings. Would you like some tips for your applications?";
    } else {
      return "I'm here to help with advising bookings, resume tips, and job search strategies. What specific career assistance do you need today?";
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end">
      {/* Chat window */}
      {isOpen && (
        <div 
          className={cn(
            "bg-background border rounded-lg shadow-lg w-full max-w-sm mb-4 flex flex-col overflow-hidden transition-all duration-300 ease-in-out card-animation",
            isMinimized ? "h-14" : "h-[450px]"
          )}
        >
          {/* Chat header */}
          <div className="bg-csulb-blue text-white p-3 flex items-center justify-between">
            <h3 className="font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> 
              Career Assistant
            </h3>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 rounded-full hover:bg-blue-600 text-white"
                onClick={toggleMinimize}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 rounded-full hover:bg-blue-600 text-white"
                onClick={toggleOpen}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Chat messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={message.id} 
                    className={cn(
                      "flex",
                      message.sender === 'user' ? "justify-end" : "justify-start",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div 
                      className={cn(
                        "rounded-lg px-4 py-2 max-w-[80%]",
                        message.sender === 'user' 
                          ? "bg-csulb-blue text-white rounded-tr-none" 
                          : "bg-muted rounded-tl-none"
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chat input */}
              <form onSubmit={handleSubmit} className="border-t p-3 flex items-center gap-2">
                <Input
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      )}
      
      {/* Chat button */}
      <Button
        onClick={toggleOpen}
        className={cn(
          "rounded-full w-14 h-14 shadow-lg animate-float",
          isOpen ? "bg-csulb-gold hover:bg-amber-500 text-black" : "bg-csulb-blue hover:bg-blue-600"
        )}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
}
