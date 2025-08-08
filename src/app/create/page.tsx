'use client';
import HostPanel from '../../components/HostPanel';
import { useState } from 'react';
import { ContentMode, Region, Room } from '../../lib/models';
import { initFirebase } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function CreateRoomPage() {
  const [mode, setMode] = useState<ContentMode>('FAMILY');
  const [region, setRegion] = useState<Region>('US');
  const [timers, setTimers] = useState({ clue: 30, debate: 60, vote: 60, guess: 60 });
  const [maxPlayers, setMaxPlayers] = useState(8);
  const router = useRouter();

  const handleCreate = async () => {
    const { db, auth } = await initFirebase();
    const roomId = crypto.randomUUID();
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const room: Room = {
      roomId,
      code,
      hostId: auth.currentUser?.uid ?? 'anonymous',
      createdAt: Date.now(),
      region,
      mode,
      timers,
      maxPlayers,
      phase: 'lobby',
      roundNumber: 1,
      isPublic: false,
    };
    await setDoc(doc(db, 'rooms', roomId), room);
    router.push(`/lobby/${roomId}`);
  };
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
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleCreate}
      >
        Create Room
      </button>
    </main>
  );
}
