
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'appointment' | 'event' | 'job';
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Advising Appointment Reminder',
    description: 'Your appointment with Dr. Smith is tomorrow at 2:00 PM',
    time: '1h ago',
    type: 'appointment',
    read: false,
  },
  {
    id: '2',
    title: 'New Job Match',
    description: 'A new job posting for "Software Engineer" matches your profile',
    time: '3h ago',
    type: 'job',
    read: false,
  },
  {
    id: '3',
    title: 'Upcoming Career Fair',
    description: 'Tech Career Fair this Friday at the Student Union',
    time: '1d ago',
    type: 'event',
    read: true,
  },
];

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  return (
    <div 
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l shadow-lg transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="border-b p-4 flex items-center justify-between">
          <h2 className="font-semibold text-lg">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close notifications">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockNotifications.map((notification, index) => (
            <div 
              key={notification.id} 
              className={cn(
                "p-4 border-b last:border-0 animate-fade-in",
                `fade-in-delay-${index + 1}`,
                !notification.read && "bg-muted/50"
              )}
            >
              <div className="flex items-start gap-2">
                <div className={cn(
                  "w-2 h-2 mt-2 rounded-full",
                  notification.type === 'appointment' && "bg-csulb-blue",
                  notification.type === 'job' && "bg-green-500",
                  notification.type === 'event' && "bg-csulb-gold",
                )} />
                <div className="flex-1">
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  <span className="text-xs text-muted-foreground mt-1 block">{notification.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full">Mark all as read</Button>
        </div>
      </div>
    </div>
  );
}
