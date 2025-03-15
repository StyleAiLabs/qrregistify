
import React from 'react';

const NoEvents = () => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">No events found</h3>
      <p className="text-muted-foreground">
        Try adjusting your search or filters to find events
      </p>
    </div>
  );
};

export default NoEvents;
