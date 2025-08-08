'use client';
import React from 'react';
import RegionSelect from '../../components/RegionSelect';
import { Region } from '../../lib/models';

export default function MatchmakingPage() {
  const [region, setRegion] = React.useState<Region>('US');
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl">Matchmaking</h1>
      <RegionSelect value={region} onChange={setRegion} />
      <p>Queueing for region: {region}</p>
    </main>
  );
}
