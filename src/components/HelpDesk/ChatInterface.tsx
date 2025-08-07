import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Headphones, Star, RotateCcw, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai" | "agent";
  timestamp: Date;
  rating?: number;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "ko";
  onLanguageChange: (lang: "en" | "ko") => void;
}

const translations = {
  en: {
    title: "Help Center",
    placeholder: "Type your message...",
    send: "Send",
    connectingToAgent: "Connecting to human agent...",
    agentConnected: "Agent connected",
    rateConversation: "Rate this conversation",
    newConversation: "New conversation",
    aiResponse: "I'm here to help! What can I assist you with today?",
    escalateToAgent: "Connect to human agent",
    typing: "AI is typing...",
  },
  ko: {
    title: "고객 지원",
    placeholder: "메시지를 입력하세요...",
    send: "전송",
    connectingToAgent: "상담원 연결 중...",
    agentConnected: "상담원 연결됨",
    rateConversation: "대화를 평가해주세요",
    newConversation: "새 대화",
    aiResponse: "안녕하세요! 무엇을 도와드릴까요?",
    escalateToAgent: "상담원 연결",
    typing: "AI가 입력 중...",
  },
};

export const ChatInterface = ({ 
  isOpen, 
  onClose, 
  language, 
  onLanguageChange 
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: translations[language].aiResponse,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [agentMode, setAgentMode] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponses = [
        "I understand your question. Let me help you with that.",
        "Based on our knowledge base, here's what I found...",
        "That's a great question! Here's how you can resolve this:",
        "I see you're having trouble with this. Let me guide you through the solution.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }]);
      
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    if (!agentMode) {
      simulateAIResponse(inputValue);
    }
  };

  const handleEscalateToAgent = () => {
    setAgentMode(true);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: t.connectingToAgent,
      sender: "ai",
      timestamp: new Date(),
    }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: t.agentConnected,
        sender: "agent",
        timestamp: new Date(),
      }]);
    }, 2000);
  };

  const handleRating = (stars: number) => {
    setRating(stars);
    setShowRating(false);
    // Here you would typically send the rating to your backend
  };

  const startNewConversation = () => {
    setMessages([{
      id: "1",
      content: t.aiResponse,
      sender: "ai",
      timestamp: new Date(),
    }]);
    setAgentMode(false);
    setShowRating(false);
    setRating(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-6 bottom-6 top-6 w-full max-w-md bg-card border border-border rounded-xl shadow-floating animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {agentMode ? (
                <Headphones className="h-5 w-5" />
              ) : (
                <Bot className="h-5 w-5" />
              )}
              <h2 className="font-semibold">{t.title}</h2>
            </div>
            {agentMode && (
              <Badge variant="success" className="text-xs">
                {t.agentConnected}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "en" ? "ko" : "en")}
              className="text-primary-foreground hover:bg-primary-hover"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-primary-foreground hover:bg-primary-hover"
            >
              ×
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 animate-fade-in",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.sender !== "user" && (
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0",
                  message.sender === "ai" ? "bg-chat-ai text-foreground" : "bg-chat-agent"
                )}>
                  {message.sender === "ai" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <Headphones className="h-4 w-4" />
                  )}
                </div>
              )}
              
              <div
                className={cn(
                  "max-w-[80%] rounded-xl px-4 py-2 text-sm",
                  message.sender === "user"
                    ? "bg-chat-user text-primary-foreground ml-auto"
                    : message.sender === "ai"
                    ? "bg-chat-ai text-foreground"
                    : "bg-chat-agent text-success-foreground"
                )}
              >
                {message.content}
              </div>
              
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-chat-ai flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-chat-ai text-foreground rounded-xl px-4 py-2 text-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          {!agentMode && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleEscalateToAgent}
              className="w-full mb-3 text-sm"
            >
              <Headphones className="h-4 w-4 mr-2" />
              {t.escalateToAgent}
            </Button>
          )}
          
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.placeholder}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="sm" variant="default">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={startNewConversation}
              className="text-xs"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              {t.newConversation}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowRating(true)}
              className="text-xs"
            >
              <Star className="h-3 w-3 mr-1" />
              {t.rateConversation}
            </Button>
          </div>
        </div>

        {/* Rating Modal */}
        {showRating && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">{t.rateConversation}</h3>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRating(star)}
                    className="p-1"
                  >
                    <Star
                      className={cn(
                        "h-6 w-6",
                        star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                      )}
                    />
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setShowRating(false)} variant="outline" size="sm">
                  Cancel
                </Button>
                <Button onClick={() => setShowRating(false)} size="sm">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};