'use client';
import React from 'react';
import { Player } from '../lib/models';

interface Props {
  players: Player[];
  hostId?: string;
}

export default function PlayerList({ players, hostId }: Props) {
  return (
    <ul className="list-disc pl-4">
      {players.map((p) => (
        <li key={p.playerId}>
          {p.displayName}
          {p.playerId === hostId && <span className="ml-1 text-xs">(host)</span>}
        </li>
      ))}
    </ul>
  );
}
