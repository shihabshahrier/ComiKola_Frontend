import { Suspense } from 'react';
import { MOCK_USER } from '@/lib/constants';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileContent from '@/components/profile/ProfileContent';

// This is required for static export
export function generateStaticParams() {
  // In a real app, this would fetch from your API/database
  return [
    { username: 'AnikaBD' },
    { username: 'RashidComics' },
    { username: 'DhakaArtist' },
  ];
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  // In a real app, this would fetch based on the username
  const user = MOCK_USER;

  return (
    <main className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileHeader user={user} />
          <ProfileContent user={user} />
        </Suspense>
      </div>
    </main>
  );
}