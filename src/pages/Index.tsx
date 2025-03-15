
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import { 
  QrCode, 
  Users, 
  CalendarCheck, 
  BarChart, 
  Zap, 
  Shield, 
  Check, 
  ChevronRight, 
  ArrowRight,
  Smartphone,
  RefreshCw
} from 'lucide-react';

const Index = () => {
  // Demo events data
  const upcomingEvents = [
    {
      id: "1",
      title: "Tech Conference 2023",
      date: "Dec 15, 2023",
      time: "9:00 AM",
      location: "Convention Center, New York",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      attendees: 320,
      maxAttendees: 400
    },
    {
      id: "2",
      title: "Startup Networking Mixer",
      date: "Dec 20, 2023",
      time: "6:30 PM",
      location: "Innovation Hub, San Francisco",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      attendees: 45,
      maxAttendees: 50
    },
    {
      id: "3",
      title: "Web Development Workshop",
      date: "Jan 5, 2024",
      time: "10:00 AM",
      location: "Tech Campus, Austin",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      attendees: 28,
      maxAttendees: 50
    }
  ];

  // Demo features
  const features = [
    {
      icon: <QrCode className="h-8 w-8 text-brand-600" />,
      title: "QR Code Registration",
      description: "Streamline event check-ins with scannable codes that verify attendees instantly."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-600" />,
      title: "Group Management",
      description: "Organize attendees into teams with dedicated tools for group leaders."
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-brand-600" />,
      title: "Event Creation",
      description: "Create and customize events with flexible configuration options."
    },
    {
      icon: <BarChart className="h-8 w-8 text-brand-600" />,
      title: "Real-time Analytics",
      description: "Track attendance and engagement with detailed analytics dashboards."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-600" />,
      title: "Instant Check-ins",
      description: "Process registrations in milliseconds, eliminating long waiting lines."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-600" />,
      title: "Secure Data Handling",
      description: "All attendee information is encrypted and securely stored."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Featured Events Section */}
        <section className="py-16 bg-gradient-to-b from-transparent to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
                <p className="text-muted-foreground mt-2">Discover and register for these exciting events</p>
              </div>
              <Button variant="ghost" className="mt-4 md:mt-0 gap-1" asChild>
                <Link to="/events">
                  View all events <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  {...event} 
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Powerful Features</h2>
              <p className="text-muted-foreground text-lg">
                Our platform offers everything you need to create, manage, and track successful events
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-xl border bg-card/50 hover:bg-card hover:shadow-sm transition-all"
                >
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* QR Code Demo Section */}
        <section className="py-16 bg-gradient-to-br from-brand-50/50 to-event-50/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  How It Works
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Simple, Efficient <br /> QR-Based Check-ins
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our QR code system makes registration and check-in seamless for both organizers and attendees. Generate unique codes, scan instantly, and track attendance in real-time.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Generate unique QR codes for each attendee",
                    "Scan and verify in milliseconds",
                    "Works offline with data syncing later",
                    "Reduces check-in time by up to 80%"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-2">
                  <Button size="lg" className="gap-2" asChild>
                    <Link to="/features">
                      Explore Features <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border relative z-10 bg-white">
                  <QRCodeDisplay 
                    value="https://qrregister.com/events/demo-event"
                    size={240}
                    label="Demo Event Ticket"
                    description="Scan this QR code to check in to the Demo Conference"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 z-0 opacity-70">
                  <Smartphone className="h-48 w-48 text-brand-200" />
                </div>
                <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/3 z-0 opacity-60">
                  <RefreshCw className="h-32 w-32 text-event-200" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-primary/5 p-10 rounded-2xl border border-primary/10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Streamline Your Events?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of event organizers who have simplified their registration process with QRRegister.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/register">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
