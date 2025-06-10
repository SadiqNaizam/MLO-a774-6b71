import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundPanelProps {
  className?: string;
}

const BackgroundPanel: React.FC<BackgroundPanelProps> = ({ className }) => {
  return (
    <div
      className={cn(
        // This component is designed to fill the container it's placed in.
        // The parent layout (e.g., LoginLayout) will define its dimensions (e.g., w-1/2 h-screen).
        "relative w-full h-full bg-muted overflow-hidden hidden md:flex flex-col justify-start p-8",
        className 
      )}
    >
      {/* Branding at the top-left */}
      <div className="relative z-20"> {/* Higher z-index to ensure visibility above shapes */}
        <h1 className="text-3xl font-bold text-foreground">
          ASCENDION
        </h1>
        <p className="text-sm font-semibold text-primary mt-1">
          YOUR PARTNER
        </p>
      </div>

      {/* Decorative Shapes Layer */}
      {/* Shape 1: Large Blue primary. Base graphic element. */}
      <div
        aria-hidden="true" // Decorative element, hide from screen readers
        className="absolute z-0 opacity-80 w-[130%] h-[130%] -bottom-[65%] -right-[75%] bg-primary 
                   rounded-[45%_55%_40%_60%_/_65%_50%_50%_35%] transform -rotate-[20deg]"
      />

      {/* Shape 2: Large White 'background' color. Positioned to appear on top of the blue shape. */}
      <div
        aria-hidden="true" // Decorative element
        className="absolute z-10 opacity-100 w-[120%] h-[120%] -bottom-[60%] -left-[70%] bg-background 
                   rounded-[55%_45%_50%_50%_/_40%_60%_40%_60%] transform rotate-[15deg]"
      />
      
      {/* Shape 3: Subtle blurred element for added depth. */}
       <div 
        aria-hidden="true" // Decorative element
        className="absolute z-0 w-[100%] h-[100%] -bottom-[55%] -right-[65%] bg-primary opacity-10 
                   rounded-[50%_50%_50%_50%_/_60%_40%_60%_40%] transform -rotate-[25deg] blur-lg"
      />

    </div>
  );
};

export default BackgroundPanel;
