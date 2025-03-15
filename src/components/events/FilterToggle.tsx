
import React from 'react';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

interface FilterToggleProps {
  showFilters: boolean;
  toggleFilters: () => void;
}

const FilterToggle = ({ showFilters, toggleFilters }: FilterToggleProps) => {
  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={toggleFilters}
      className={showFilters ? "bg-primary/10 text-primary" : ""}
    >
      <SlidersHorizontal className="h-4 w-4" />
      <span className="sr-only">Filters</span>
    </Button>
  );
};

export default FilterToggle;
