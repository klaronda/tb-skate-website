import React from 'react';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    completed: 'bg-green-100 text-green-700 border-green-200',
    processing: 'bg-orange-100 text-orange-700 border-orange-200',
    pending: 'bg-gray-100 text-gray-700 border-gray-200'
  };
  
  const badge = (
    <Badge variant="outline" className={colors[status as keyof typeof colors] || colors.pending}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
  
  if (status === 'processing') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="inline-flex cursor-help">
              {badge}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>We're processing your video. Taking too long? Tap View Details then the refresh button</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  return badge;
}
