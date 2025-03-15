
import React from 'react';

const EventsHeader = () => {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Browse Events
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover and register for upcoming events. Use the filters to find events that match your interests.
        </p>
      </div>
    </section>
  );
};

export default EventsHeader;
