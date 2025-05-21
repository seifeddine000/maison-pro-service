
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'artisan';
  timestamp: Date;
}

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  artisan: {
    id: string;
    name: string;
    profession: string;
    profileImage: string;
  };
}

const ChatDialog: React.FC<ChatDialogProps> = ({ open, onOpenChange, artisan }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Bonjour ! Je suis ${artisan.name}, ${artisan.profession}. Comment puis-je vous aider aujourd'hui ?`,
      sender: 'artisan',
      timestamp: new Date(),
    },
  ]);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setMessage('');

    // Simulate artisan response after a short delay
    setTimeout(() => {
      const responses = [
        "Je vous remercie pour votre message. Je suis disponible pour discuter de votre projet.",
        "Merci de me contacter. Pourriez-vous me donner plus de détails sur ce que vous recherchez ?",
        "Je serais ravi de vous aider. Quand souhaiteriez-vous que je commence ?",
        "C'est un projet intéressant. Je peux vous proposer un devis si vous me donnez plus d'informations.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const newArtisanMessage: Message = {
        id: `artisan-${Date.now()}`,
        content: randomResponse,
        sender: 'artisan',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newArtisanMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg w-full max-h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={artisan.profileImage} alt={artisan.name} />
              <AvatarFallback>{artisan.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <DialogTitle className="text-lg">
              {artisan.name}
              <div className="text-sm font-normal text-gray-500">{artisan.profession}</div>
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto py-4 px-2 space-y-4 min-h-[300px] max-h-[50vh]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-artisan-blue text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{msg.content}</p>
                <div
                  className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-gray-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="flex flex-row gap-2 items-center border-t pt-3">
          <div className="flex-1 relative">
            <Input
              placeholder="Écrivez votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pr-12"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2"
              onClick={handleSendMessage}
            >
              <Send size={18} />
            </Button>
          </div>
          <Button
            onClick={() => {
              onOpenChange(false);
              toast({
                title: "Message envoyé",
                description: `Votre conversation avec ${artisan.name} a été enregistrée.`,
                duration: 3000,
              });
            }}
          >
            Terminer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
