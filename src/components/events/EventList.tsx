
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
  attendees: number;
  maxAttendees: number;
  category: string;
}

interface EventListProps {
  events: EventProps[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="space-y-4">
      {events.map(event => (
        <div 
          key={event.id}
          className="flex flex-col md:flex-row gap-4 border rounded-xl overflow-hidden bg-card hover:shadow-sm transition-all"
        >
          <div className="md:w-1/4 h-48 md:h-auto relative">
            {event.imageUrl ? (
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-100 to-event-100 flex items-center justify-center">
                <Calendar className="h-12 w-12 text-muted-foreground/30" />
              </div>
            )}
            <div className="absolute top-2 right-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                event.attendees === event.maxAttendees 
                  ? 'bg-red-500' 
                  : event.attendees > event.maxAttendees * 0.8 
                    ? 'bg-amber-500' 
                    : 'bg-green-500'
              }`}>
                {event.attendees === event.maxAttendees 
                  ? 'Full' 
                  : event.attendees > event.maxAttendees * 0.8 
                    ? 'Filling' 
                    : 'Open'}
              </span>
            </div>
          </div>
          
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-primary font-medium mb-1">{event.category}</p>
                  <h3 className="font-display font-bold text-xl mb-2">{event.title}</h3>
                </div>
                <div className="text-sm text-muted-foreground">
                  {event.attendees}/{event.maxAttendees} <Users className="inline h-3 w-3" />
                </div>
              </div>
              
              <div className="space-y-2 mt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.date}</span>
                  <span className="mx-1">•</span>
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <Link to={`/events/${event.id}`}>
                  View Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
