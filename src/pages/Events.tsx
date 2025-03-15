
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { eventsData, EventData } from '@/data/eventsData';
import SearchBar from '@/components/events/SearchBar';
import ViewModeToggle from '@/components/events/ViewModeToggle';
import EventFilters from '@/components/events/EventFilters';
import EventList from '@/components/events/EventList';
import EventGrid from '@/components/events/EventGrid';
import FilterToggle from '@/components/events/FilterToggle';
import EventsHeader from '@/components/events/EventsHeader';
import NoEvents from '@/components/events/NoEvents';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <EventsHeader />
        
        <section className="py-6 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              
              <div className="flex gap-2">
                <FilterToggle showFilters={showFilters} toggleFilters={toggleFilters} />
                
                <Separator orientation="vertical" className="h-10" />
                
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
              </div>
            </div>
            
            <EventFilters showFilters={showFilters} toggleFilters={toggleFilters} />
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4">
            {filteredEvents.length === 0 ? (
              <NoEvents />
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredEvents.length} events
                  </p>
                </div>
                
                {viewMode === 'grid' ? (
                  <EventGrid events={filteredEvents} />
                ) : (
                  <EventList events={filteredEvents} />
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
