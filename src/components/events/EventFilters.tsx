
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Calendar, 
  MapPin, 
  Filter, 
  X,
  Users,
  Clock
} from 'lucide-react';

interface EventFiltersProps {
  showFilters: boolean;
  toggleFilters: () => void;
}

const EventFilters = ({ showFilters, toggleFilters }: EventFiltersProps) => {
  if (!showFilters) return null;

  return (
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
  );
};

export default EventFilters;
