import React, { ReactNode } from 'react';
import './GlowingCard.css';

interface GlowingCardProps {
  children: ReactNode;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({ children }) => {
  return (
    <div className="glowing-card h-full">
      <div className="h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};