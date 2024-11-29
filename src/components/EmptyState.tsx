import React from 'react';
import { UserX } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-400">
      <UserX className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">No users found</h3>
      <p>Try adjusting your search criteria</p>
    </div>
  );
};