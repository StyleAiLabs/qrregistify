import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Filter, 
  Grid, 
  List,
  SlidersHorizontal,
  X,
  Users,
  Clock
} from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const eventsData = [
    {
      id: "1",
      title: "Tech Conference 2023",
      date: "Dec 15, 2023",
      time: "9:00 AM",
      location: "Convention Center, New York",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      attendees: 320,
      maxAttendees: 400,
      category: "Technology"
    },
    {
      id: "2",
      title: "Startup Networking Mixer",
      date: "Dec 20, 2023",
      time: "6:30 PM",
      location: "Innovation Hub, San Francisco",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      attendees: 45,
      maxAttendees: 50,
      category: "Networking"
    },
    {
      id: "3",
      title: "Web Development Workshop",
      date: "Jan 5, 2024",
      time: "10:00 AM",
      location: "Tech Campus, Austin",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      attendees: 28,
      maxAttendees: 50,
      category: "Workshop"
    },
    {
      id: "4",
      title: "Business Leadership Summit",
      date: "Jan 10, 2024",
      time: "8:00 AM",
      location: "Grand Hotel, Chicago",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
      attendees: 150,
      maxAttendees: 200,
      category: "Business"
    },
    {
      id: "5",
      title: "UI/UX Design Conference",
      date: "Jan 15, 2024",
      time: "9:30 AM",
      location: "Design Center, Seattle",
      imageUrl: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
      attendees: 80,
      maxAttendees: 100,
      category: "Design"
    },
    {
      id: "6",
      title: "Artificial Intelligence Expo",
      date: "Jan 20, 2024",
      time: "10:00 AM",
      location: "Tech Pavilion, Boston",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      attendees: 420,
      maxAttendees: 500,
      category: "Technology"
    },
    {
      id: "7",
      title: "Remote Work Summit",
      date: "Feb 1, 2024",
      time: "11:00 AM",
      location: "Virtual Event",
      imageUrl: "https://images.unsplash.com/photo-1591017403997-bdfb7d275e46?q=80&w=2070&auto=format&fit=crop",
      attendees: 250,
      maxAttendees: 1000,
      category: "Business"
    },
    {
      id: "8",
      title: "Mobile App Development Bootcamp",
      date: "Feb 10, 2024",
      time: "9:00 AM",
      location: "Tech Institute, Austin",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      attendees: 35,
      maxAttendees: 40,
      category: "Workshop"
    },
    {
      id: "9",
      title: "Cybersecurity Conference",
      date: "Feb 15, 2024",
      time: "8:30 AM",
      location: "Security Center, Washington DC",
      imageUrl: "https://images.unsplash.com/photo-1592772874383-d08932d29db7?q=80&w=2070&auto=format&fit=crop",
      attendees: 180,
      maxAttendees: 200,
      category: "Technology"
    }
  ];
  
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
        
        <section className="py-6 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search events by name, location, or category..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={toggleFilters}
                  className={showFilters ? "bg-primary/10 text-primary" : ""}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="sr-only">Filters</span>
                </Button>
                
                <Separator orientation="vertical" className="h-10" />
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? "bg-primary/10 text-primary" : ""}
                >
                  <Grid className="h-4 w-4" />
                  <span className="sr-only">Grid view</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? "bg-primary/10 text-primary" : ""}
                >
                  <List className="h-4 w-4" />
                  <span className="sr-only">List view</span>
                </Button>
              </div>
            </div>
            
            {showFilters && (
              <div className="mt-4 p-4 border rounded-lg bg-card animate-fade-down">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={toggleFilters}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label className="block mb-2">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input placeholder="Any location" className="pl-10" />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block mb-2">Date Range</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input type="date" className="pl-10" />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block mb-2">Category</Label>
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background">
                        <option value="">All Categories</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="design">Design</option>
                        <option value="workshop">Workshop</option>
                        <option value="networking">Networking</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block mb-2">Capacity</Label>
                    <div className="px-3 pt-6">
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block mb-2">Time of Day</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Clock className="h-3 w-3" /> Morning
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Clock className="h-3 w-3" /> Afternoon
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Clock className="h-3 w-3" /> Evening
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block mb-2">Availability</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Users className="h-3 w-3" /> Available
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Users className="h-3 w-3" /> Almost Full
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Reset Filters
                  </Button>
                  <Button size="sm">
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find events
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredEvents.length} events
                  </p>
                </div>
                
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map(event => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredEvents.map(event => (
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
