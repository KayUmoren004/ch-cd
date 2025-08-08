'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PlayerList from '../../../components/PlayerList';
import { Player } from '../../../lib/models';

export default function LobbyPage() {
  const params = useParams<{ roomId: string }>();
  const players: Player[] = [];
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl">Lobby {params.roomId}</h1>
      <PlayerList players={players} />
    </main>
  );
}
