
export interface EventData {
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

export const eventsData: EventData[] = [
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
