import { useState } from "react";
import { MessageCircle, X, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FloatingChatButtonProps {
  onToggleChat: () => void;
  isOpen: boolean;
  hasUnread?: boolean;
  unreadCount?: number;
}

export const FloatingChatButton = ({
  onToggleChat,
  isOpen,
  hasUnread = false,
  unreadCount = 0,
}: FloatingChatButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onToggleChat}
        variant="floating"
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full shadow-floating transition-all duration-300",
          "hover:scale-110 active:scale-95",
          hasUnread && !isOpen && "animate-pulse-glow",
          isOpen && "rotate-180"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            {hasUnread && unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-fade-in">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </>
        )}
      </Button>
      
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-card text-card-foreground px-3 py-2 rounded-lg shadow-card text-sm whitespace-nowrap animate-float opacity-0 hover:opacity-100 transition-opacity duration-300">
          Need help? Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
        </div>
      )}
    </div>
  );
};