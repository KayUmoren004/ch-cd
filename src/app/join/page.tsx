'use client';
import React, { useState } from 'react';
import { initFirebase } from '../../lib/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { Player } from '../../lib/models';
import { useRouter } from 'next/navigation';

export default function JoinRoomPage() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleJoin = async () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;
    const { db, auth } = await initFirebase();
    const roomsRef = collection(db, 'rooms');
    const q = query(roomsRef, where('code', '==', trimmed));
    const snap = await getDocs(q);
    if (snap.empty) {
      alert('Room not found');
      return;
    }
    const roomDoc = snap.docs[0];
    const roomId = roomDoc.id;
    const playerId = auth.currentUser?.uid ?? crypto.randomUUID();
    const player: Player = {
      playerId,
      displayName: 'Anonymous',
      joinedAt: Date.now(),
      lastSeen: Date.now(),
      score: 0,
    };
    await setDoc(doc(db, 'rooms', roomId, 'players', playerId), player);
    router.push(`/lobby/${roomId}`);
  };
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl">Join Room</h1>
      <input
        className="border p-2"
        placeholder="Enter code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button className="border p-2 rounded" onClick={handleJoin}>Join</button>
    </main>
  );
}
