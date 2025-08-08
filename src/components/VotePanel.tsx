'use client';
import React from 'react';
import { Player } from '../lib/models';

interface Props {
  players: Player[];
  vote?: string;
  onVote: (playerId: string) => void;
}

export default function VotePanel({ players, vote, onVote }: Props) {
  return (
    <div className="space-y-2">
      {players.map((p) => (
        <button
          key={p.playerId}
          className={`border p-2 rounded w-full ${vote === p.playerId ? 'bg-blue-200' : ''}`}
          onClick={() => onVote(p.playerId)}
        >
          {p.displayName}
        </button>
      ))}
    </div>
  );
}
