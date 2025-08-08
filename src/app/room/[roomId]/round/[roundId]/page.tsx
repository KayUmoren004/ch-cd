'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PhaseBanner from '../../../../components/PhaseBanner';
import BoardGrid from '../../../../components/BoardGrid';
import ClueInput from '../../../../components/ClueInput';
import VotePanel from '../../../../components/VotePanel';
import TimerDisplay from '../../../../components/TimerDisplay';
import { CategoryBoard, Player, Phase } from '../../../../lib/models';

export default function RoundPage() {
  const params = useParams<{ roomId: string; roundId: string }>();
  const phase: Phase = 'clue';
  const board: CategoryBoard = {
    categoryId: 'demo',
    title: 'Demo',
    mode: 'FAMILY',
    words: [],
  };
  const players: Player[] = [];
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl">Round {params.roundId}</h1>
      <PhaseBanner phase={phase} />
      <TimerDisplay seconds={30} />
      <BoardGrid board={board} />
      <ClueInput onSubmit={(c) => console.log(c)} />
      <VotePanel players={players} onVote={(p) => console.log(p)} />
    </main>
  );
}
