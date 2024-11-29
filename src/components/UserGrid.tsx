import React from 'react';
import { UserCard } from './UserCard';
import { User } from '../types/user';
import { motion } from 'framer-motion';

interface UserGridProps {
  users: User[];
}

export const UserGrid: React.FC<UserGridProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <motion.div
          key={user.id}
          className="h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <UserCard user={user} />
        </motion.div>
      ))}
    </div>
  );
};