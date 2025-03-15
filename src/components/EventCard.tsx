
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type EventCardProps = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  imageUrl?: string;
  attendees?: number;
  maxAttendees?: number;
  className?: string;
  featured?: boolean;
};

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  imageUrl,
  attendees,
  maxAttendees,
  className,
  featured = false,
}) => {
  const hasAttendeeInfo = attendees !== undefined && maxAttendees !== undefined;
  const attendeePercentage = hasAttendeeInfo ? (attendees / maxAttendees) * 100 : null;
  
  let statusColor = 'bg-green-500';
  let statusText = 'Open';
  
  if (hasAttendeeInfo) {
    if (attendees >= maxAttendees) {
      statusColor = 'bg-red-500';
      statusText = 'Full';
    } else if (attendeePercentage && attendeePercentage > 80) {
      statusColor = 'bg-amber-500';
      statusText = 'Filling';
    }
  }

  return (
    <div 
      className={cn(
        'group bg-card rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-md relative',
        featured ? 'shadow-xl scale-[1.02]' : 'hover:scale-[1.01]',
        className
      )}
    >
      {/* Status indicator */}
      <div className="absolute top-3 right-3 z-10">
        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${statusColor}`}>
          {statusText}
        </span>
      </div>
      
      {/* Event image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-100 to-event-100 flex items-center justify-center">
            <Calendar className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}
      </div>
      
      {/* Event details */}
      <div className="p-5">
        <h3 className="font-display font-bold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mt-3 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{date}</span>
            {time && (
              <>
                <span className="mx-1">•</span>
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{time}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          
          {hasAttendeeInfo && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{attendees}/{maxAttendees} Attendees</span>
            </div>
          )}
        </div>
        
        {/* Registration progress if attendee info available */}
        {hasAttendeeInfo && (
          <div className="mt-1 mb-4">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full",
                  attendeePercentage && attendeePercentage > 80 ? "bg-amber-500" : 
                  attendeePercentage && attendeePercentage === 100 ? "bg-red-500" : "bg-brand-500"
                )}
                style={{ width: `${attendeePercentage}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <Button 
            className="w-full"
            variant={featured ? "default" : "outline"}
            asChild
          >
            <Link to={`/events/${id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
