'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
  
      if (token) {
        const res = await fetch('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        } else if (res.status === 401) {
          alert('Invalid token');
          window.location.href = '/';
        } else {
          alert('An error occurred. Please try again later.');
        }
      } else {
        window.location.href = '/';
      }
    };
  
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Profile</h1>
      <p>Name: {profile?.name}</p>
      <p>Email: {profile?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}