
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, QrCode, BarChart, Shield, CheckCircle2 } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Former event manager turned tech entrepreneur. Alex founded QRRegister after experiencing the pain of manual event check-ins.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Full-stack developer with a passion for creating elegant solutions to complex problems. Sarah architected the QRRegister platform from the ground up.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
    },
    {
      name: "Miguel Rodriguez",
      role: "Head of Product",
      bio: "User experience specialist with a background in event planning. Miguel ensures QRRegister meets the needs of both organizers and attendees.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About <span className="text-primary">QRRegister</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're revolutionizing event management with our streamlined QR code-based registration system. Our mission is to eliminate queues and simplify event check-ins for organizers and attendees alike.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  QRRegister was born out of frustration with traditional event registration processes. Our founder, Alex Johnson, spent years organizing tech conferences and networking events, consistently facing the same challenges: long check-in lines, lost paper tickets, and disorganized group registrations.
                </p>
                <p className="text-muted-foreground mb-4">
                  In 2021, Alex teamed up with Sarah Chen, a full-stack developer, to create a solution. Their vision was to build a platform that would streamline the entire event registration process, from ticket sales to check-in, with a special focus on QR code technology and group management.
                </p>
                <p className="text-muted-foreground">
                  Today, QRRegister is used by thousands of event organizers worldwide, transforming the way events are managed and experienced.
                </p>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team working together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <blockquote className="text-white font-medium italic">
                    "We built QRRegister to solve real problems for event organizers and attendees alike."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-muted-foreground">
                We're guided by a clear mission and a set of core values that drive everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-semibold text-xl mb-3">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe technology should simplify, not complicate. Our platform is intuitive and straightforward, making event management accessible to everyone.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-semibold text-xl mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We're always looking for new ways to improve the event experience. Our team continuously explores emerging technologies and best practices.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-semibold text-xl mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Events don't get second chances. Our platform is built to be reliable and secure, ensuring everything runs smoothly when it matters most.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The passionate people behind QRRegister
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="rounded-xl overflow-hidden aspect-square mb-4 bg-muted relative">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <p className="text-muted-foreground">Events Managed</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                <p className="text-muted-foreground">QR Codes Scanned</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Group Registrations</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground">
                QRRegister offers a unique set of features designed specifically for modern event management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Advanced QR Technology</h3>
                  <p className="text-muted-foreground">
                    Our proprietary QR code system offers enhanced security and offline functionality, ensuring smooth check-ins even without internet connection.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Group Management</h3>
                  <p className="text-muted-foreground">
                    Our comprehensive group registration system allows organizers to manage teams, delegate leaders, and track group attendance with ease.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Real-time Analytics</h3>
                  <p className="text-muted-foreground">
                    Gain valuable insights with our analytics dashboard, providing real-time data on check-ins, attendee demographics, and engagement metrics.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Enterprise-grade Security</h3>
                  <p className="text-muted-foreground">
                    We prioritize the security of your data with end-to-end encryption, regular security audits, and GDPR compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from event organizers who've transformed their registration process with QRRegister
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                      alt="John Miller" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">John Miller</h4>
                    <p className="text-sm text-muted-foreground">TechConf Organizer</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "QRRegister has completely transformed our check-in process. What used to take hours now happens in minutes, with far fewer staff needed."
                </p>
                <div className="flex mt-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                      alt="Lisa Wong" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lisa Wong</h4>
                    <p className="text-sm text-muted-foreground">Corporate Events Manager</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The group management feature is a game-changer for our corporate events. It's made managing team registrations so much easier."
                </p>
                <div className="flex mt-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                      alt="David Smith" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Smith</h4>
                    <p className="text-sm text-muted-foreground">University Event Coordinator</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The analytics have given us invaluable insights into our event attendance patterns. We've been able to optimize our scheduling as a result."
                </p>
                <div className="flex mt-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Transform Your Event Registration?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of event organizers who have simplified their registration process with QRRegister. Get started today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/register">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    Contact Us
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

export default About;
