
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowLeft,
  Share2, 
  Heart
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const EventDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // In a real app, this would be fetched from your API
  // This is just a mock for demonstration
  const eventsData = [
    {
      id: "1",
      title: "Tech Conference 2023",
      date: "Dec 15, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, New York",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      attendees: 320,
      maxAttendees: 400,
      category: "Technology",
      description: "Join us for the biggest tech conference of the year. Network with industry leaders, attend workshops, and learn about the latest technologies shaping our future.",
      organizer: "Tech Events Inc.",
      price: "Free",
      tags: ["Technology", "Networking", "Workshop"]
    },
    {
      id: "2",
      title: "Startup Networking Mixer",
      date: "Dec 20, 2023",
      time: "6:30 PM - 9:00 PM",
      location: "Innovation Hub, San Francisco",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      attendees: 45,
      maxAttendees: 50,
      category: "Networking",
      description: "Connect with fellow entrepreneurs, investors, and startup enthusiasts in a relaxed environment. Share ideas, gain insights, and expand your professional network.",
      organizer: "Startup SF",
      price: "$15",
      tags: ["Startup", "Networking", "Business"]
    },
    {
      id: "3",
      title: "Web Development Workshop",
      date: "Jan 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Campus, Austin",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      attendees: 28,
      maxAttendees: 50,
      category: "Workshop",
      description: "Hands-on workshop covering the latest web development frameworks and best practices. Suitable for beginners and intermediate developers looking to expand their skills.",
      organizer: "Code Academy",
      price: "$25",
      tags: ["Web Development", "Programming", "Workshop"]
    },
    {
      id: "4",
      title: "Business Leadership Summit",
      date: "Jan 10, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Grand Hotel, Chicago",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
      attendees: 150,
      maxAttendees: 200,
      category: "Business",
      description: "A day-long summit featuring keynote speakers, panel discussions, and networking opportunities focused on effective leadership strategies for the modern business landscape.",
      organizer: "Business Leaders Association",
      price: "$150",
      tags: ["Business", "Leadership", "Professional Development"]
    },
    {
      id: "5",
      title: "UI/UX Design Conference",
      date: "Jan 15, 2024",
      time: "9:30 AM - 4:30 PM",
      location: "Design Center, Seattle",
      imageUrl: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
      attendees: 80,
      maxAttendees: 100,
      category: "Design",
      description: "Explore the latest trends and techniques in UI/UX design. Learn from industry experts about creating intuitive, accessible, and engaging user experiences.",
      organizer: "Design Alliance",
      price: "$75",
      tags: ["Design", "UI/UX", "Creative"]
    },
    {
      id: "6",
      title: "Artificial Intelligence Expo",
      date: "Jan 20, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Tech Pavilion, Boston",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      attendees: 420,
      maxAttendees: 500,
      category: "Technology",
      description: "An immersive expo showcasing the latest innovations in artificial intelligence and machine learning. Demonstrations, talks, and interactive exhibits from leading AI companies.",
      organizer: "AI Initiative",
      price: "$50",
      tags: ["AI", "Technology", "Innovation"]
    },
    {
      id: "7",
      title: "Remote Work Summit",
      date: "Feb 1, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Virtual Event",
      imageUrl: "https://images.unsplash.com/photo-1591017403997-bdfb7d275e46?q=80&w=2070&auto=format&fit=crop",
      attendees: 250,
      maxAttendees: 1000,
      category: "Business",
      description: "Virtual summit focused on remote work strategies, tools, and best practices. Learn how to build and manage effective remote teams in today's distributed workforce.",
      organizer: "Future of Work Coalition",
      price: "Free",
      tags: ["Remote Work", "Business", "Virtual"]
    },
    {
      id: "8",
      title: "Mobile App Development Bootcamp",
      date: "Feb 10, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Institute, Austin",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      attendees: 35,
      maxAttendees: 40,
      category: "Workshop",
      description: "Intensive bootcamp on building modern mobile applications. Covers iOS and Android development, cross-platform frameworks, and publishing to app stores.",
      organizer: "Mobile Dev Academy",
      price: "$120",
      tags: ["Mobile Development", "Programming", "Bootcamp"]
    },
    {
      id: "9",
      title: "Cybersecurity Conference",
      date: "Feb 15, 2024",
      time: "8:30 AM - 5:30 PM",
      location: "Security Center, Washington DC",
      imageUrl: "https://images.unsplash.com/photo-1592772874383-d08932d29db7?q=80&w=2070&auto=format&fit=crop",
      attendees: 180,
      maxAttendees: 200,
      category: "Technology",
      description: "Conference dedicated to the latest trends and challenges in cybersecurity. Features expert speakers, live demonstrations, and hands-on security workshops.",
      organizer: "Cyber Defense Institute",
      price: "$200",
      tags: ["Cybersecurity", "Technology", "Security"]
    }
  ];
  
  const event = eventsData.find(event => event.id === id);
  
  if (!event) {
    return (
      <>
        <Navbar />
        <main className="flex-1 pt-20 pb-16">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/events">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  const handleRegister = () => {
    toast({
      title: "Registration successful!",
      description: `You have registered for ${event.title}.`,
    });
  };
  
  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy link to clipboard
    toast({
      title: "Link copied!",
      description: "Event link has been copied to clipboard.",
    });
  };
  
  const attendeePercentage = (event.attendees / event.maxAttendees) * 100;
  
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        {/* Back to events link */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/events">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
            </Link>
          </Button>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Event details */}
            <div className="lg:col-span-2">
              {/* Event image */}
              <div className="rounded-xl overflow-hidden h-[300px] md:h-[400px] mb-6">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Event title and category */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{event.title}</h1>
                <p className="text-muted-foreground mt-2">Organized by {event.organizer}</p>
              </div>
              
              {/* Event details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-muted-foreground">{event.date}</p>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Capacity</h3>
                      <p className="text-muted-foreground">{event.attendees} of {event.maxAttendees} registered</p>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${
                            attendeePercentage === 100 
                              ? 'bg-red-500' 
                              : attendeePercentage > 80 
                                ? 'bg-amber-500' 
                                : 'bg-green-500'
                          }`}
                          style={{ width: `${attendeePercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                      <span className="text-primary font-bold text-sm">$</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Price</h3>
                      <p className="text-muted-foreground">{event.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              {/* Event description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <div className="prose prose-neutral max-w-none dark:prose-invert">
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
            
            {/* Right column - Registration card */}
            <div>
              <div className="border rounded-xl p-6 shadow-sm sticky top-24 bg-card">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">{event.location.split(',')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-medium">{event.price}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className={`font-medium ${
                      event.attendees === event.maxAttendees 
                        ? 'text-red-500' 
                        : event.attendees > event.maxAttendees * 0.8 
                          ? 'text-amber-500' 
                          : 'text-green-500'
                    }`}>
                      {event.maxAttendees - event.attendees} spots left
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full"
                    size="lg"
                    disabled={event.attendees >= event.maxAttendees}
                    onClick={handleRegister}
                  >
                    {event.attendees >= event.maxAttendees ? 'Sold Out' : 'Register Now'}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4 mr-2" /> Share
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                    >
                      <Heart className="h-4 w-4 mr-2" /> Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetail;
