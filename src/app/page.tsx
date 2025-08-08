'use client';
import Link from 'next/link';
import RegionSelect from '../components/RegionSelect';
import { useState } from 'react';
import { Region } from '../lib/models';

export default function Home() {
  const [region, setRegion] = useState<Region>('US');
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Cloak & Clue</h1>
      <RegionSelect value={region} onChange={setRegion} />
      <div className="space-x-4">
        <Link href="/create" className="underline">
          Create Room
        </Link>
        <Link href="/join" className="underline">
          Join Room
        </Link>
        <Link href="/matchmaking" className="underline">
          Matchmaking
        </Link>
      </div>
    </main>
  );
}
