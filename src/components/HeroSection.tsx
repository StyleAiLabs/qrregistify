
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { QrCode, Users, Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 blur-3xl opacity-20 pointer-events-none">
          <div className="aspect-square h-[40vw] rounded-full bg-brand-400"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 blur-3xl opacity-20 pointer-events-none">
          <div className="aspect-square h-[30vw] rounded-full bg-event-400"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-6">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-1">
              <QrCode className="h-4 w-4 mr-2" />
              Simple QR-Based Event Registration
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Seamless Event <br className="hidden md:block" />
              <span className="text-primary">Registration</span> Platform
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Simplify your event management with our powerful QR-based registration system. Perfect for individual and group registrations.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 gap-2" asChild>
                <Link to="/events">
                  Browse Events <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">Unlimited Events</div>
                  <div className="text-muted-foreground">Any event type</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-event-100 p-2 rounded-full text-event-600">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">Group Management</div>
                  <div className="text-muted-foreground">Team registrations</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 animate-fade-in animate-delay-200 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-50 to-event-50 border border-black/5 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 aspect-square bg-white rounded-lg shadow-lg border border-black/5 flex items-center justify-center p-5 animate-float">
                  <QrCode className="w-full h-full text-primary" />
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-[10%] right-[5%] p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 animate-float">
              <Calendar className="h-6 w-6 text-brand-600" />
            </div>
            
            <div className="absolute bottom-[15%] left-[10%] p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 animate-float animation-delay-1000">
              <Users className="h-5 w-5 text-event-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
