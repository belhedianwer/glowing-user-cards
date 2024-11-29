import React from 'react';
import { GlowingCard } from './GlowingCard';
import { User } from '../types/user';
import { Mail, Phone, Globe, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <GlowingCard>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
            alt={user.name}
            className="w-16 h-16 rounded-full bg-gray-200"
          />
          <div>
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-300">@{user.username}</p>
          </div>
        </div>
        
        <div className="space-y-4 flex-grow">
          <div className="flex items-center justify-between gap-2 group">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-gray-300">{user.email}</span>
            </div>
            <button
              onClick={() => copyToClipboard(user.email, 'email')}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Copy email"
            >
              {copied === 'email' ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-between gap-2 group">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-gray-300">{user.phone}</span>
            </div>
            <button
              onClick={() => copyToClipboard(user.phone, 'phone')}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Copy phone"
            >
              {copied === 'phone' ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <a 
              href={`https://${user.website}`}
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};