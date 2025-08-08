'use client';
import React, { useState } from 'react';

export default function JoinRoomPage() {
  const [code, setCode] = useState('');
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl">Join Room</h1>
      <input
        className="border p-2"
        placeholder="Enter code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button className="border p-2 rounded">Join</button>
    </main>
  );
}
