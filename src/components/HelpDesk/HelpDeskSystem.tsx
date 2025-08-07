import { useState } from "react";
import { FloatingChatButton } from "./FloatingChatButton";
import { ChatInterface } from "./ChatInterface";

export const HelpDeskSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const [hasUnread, setHasUnread] = useState(true);
  const [unreadCount, setUnreadCount] = useState(2);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setHasUnread(false);
      setUnreadCount(0);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleLanguageChange = (lang: "en" | "ko") => {
    setLanguage(lang);
  };

  return (
    <>
      <FloatingChatButton
        onToggleChat={handleToggleChat}
        isOpen={isChatOpen}
        hasUnread={hasUnread}
        unreadCount={unreadCount}
      />
      
      <ChatInterface
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
};