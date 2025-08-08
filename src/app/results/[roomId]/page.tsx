'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ResultsSummary from '../../../components/ResultsSummary';
import { Player } from '../../../lib/models';

export default function ResultsPage() {
  const params = useParams<{ roomId: string }>();
  const players: Player[] = [];
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl">Results {params.roomId}</h1>
      <ResultsSummary players={players} />
    </main>
  );
}
