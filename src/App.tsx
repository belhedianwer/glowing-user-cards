import React, { useState, useMemo } from 'react';
import { UserGrid } from './components/UserGrid';
import { SearchBar } from './components/SearchBar';
import { EmptyState } from './components/EmptyState';
import { useTheme } from './hooks/useTheme';

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031",
    website: "hildegard.org"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593",
    website: "anastasia.net"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info"
  }
];

function App() {
  const [search, setSearch] = useState('');
  const { theme } = useTheme();

  const filteredUsers = useMemo(() => {
    const searchLower = search.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(searchLower) ||
      user.username.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  }, [search]);

  return (
    <div 
      className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
           url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Team Members
        </h1>
        
        <SearchBar value={search} onChange={setSearch} />
        
        {filteredUsers.length > 0 ? (
          <UserGrid users={filteredUsers} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default App;