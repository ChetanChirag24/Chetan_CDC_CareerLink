
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'fair' | 'networking' | 'info';
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Career Fair',
    date: 'May 15, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Student Union',
    type: 'fair'
  },
  {
    id: '2',
    title: 'Resume Workshop',
    date: 'May 10, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Career Center, Room 302',
    type: 'workshop'
  },
  {
    id: '3',
    title: 'Industry Networking Night',
    date: 'May 20, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'University Ballroom',
    type: 'networking'
  }
];

export default function EventsCard() {
  return (
    <Card className="overflow-hidden card-animation card-hover">
      <CardHeader className="bg-gradient-to-r from-csulb-blue to-blue-500 text-white">
        <div className="flex items-center justify-between">
          <CardTitle>Upcoming Events</CardTitle>
          <Calendar className="h-5 w-5" />
        </div>
        <CardDescription className="text-blue-100">
          Events and workshops to boost your career
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
                <Badge variant={
                  event.type === 'workshop' ? 'outline' : 
                  event.type === 'fair' ? 'secondary' : 
                  event.type === 'networking' ? 'default' : 'outline'
                }>
                  {event.type === 'workshop' && 'Workshop'}
                  {event.type === 'fair' && 'Fair'}
                  {event.type === 'networking' && 'Networking'}
                  {event.type === 'info' && 'Info Session'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
