
import React from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';

interface ViewModeToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const ViewModeToggle = ({ viewMode, setViewMode }: ViewModeToggleProps) => {
  return (
    <>
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
    </>
  );
};

export default ViewModeToggle;
