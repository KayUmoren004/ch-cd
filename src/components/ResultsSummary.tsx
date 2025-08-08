'use client';
import React from 'react';
import { Player } from '../lib/models';

interface Props {
  players: Player[];
}

export default function ResultsSummary({ players }: Props) {
  return (
    <div>
      <h2 className="text-lg mb-2">Results</h2>
      <ul className="list-disc pl-4">
        {players.map((p) => (
          <li key={p.playerId}>
            {p.displayName}: {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
