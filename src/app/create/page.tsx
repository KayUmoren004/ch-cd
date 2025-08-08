'use client';
import HostPanel from '../../components/HostPanel';
import { useState } from 'react';
import { ContentMode, Region } from '../../lib/models';

export default function CreateRoomPage() {
  const [mode, setMode] = useState<ContentMode>('FAMILY');
  const [region, setRegion] = useState<Region>('US');
  const [timers, setTimers] = useState({ clue: 30, debate: 60, vote: 60, guess: 60 });
  const [maxPlayers, setMaxPlayers] = useState(8);
  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">Create Room</h1>
      <HostPanel
        mode={mode}
        region={region}
        timers={timers}
        maxPlayers={maxPlayers}
        onChange={(v) => {
          if (v.mode) setMode(v.mode);
          if (v.region) setRegion(v.region);
          if (v.timers) setTimers(v.timers);
          if (v.maxPlayers) setMaxPlayers(v.maxPlayers);
        }}
      />
    </main>
  );
}
