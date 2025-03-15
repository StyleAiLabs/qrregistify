
import React from 'react';
import EventCard from '@/components/EventCard';

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

interface EventGridProps {
  events: EventProps[];
}

const EventGrid = ({ events }: EventGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventGrid;
