'use client';
import React from 'react';
import { CategoryBoard } from '../lib/models';

interface Props {
  board: CategoryBoard;
  onSelect?: (wordId: string) => void;
}

export default function BoardGrid({ board, onSelect }: Props) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {board.words.map((w) => (
        <button
          key={w.wordId}
          className="border p-2 rounded"
          onClick={() => onSelect?.(w.wordId)}
        >
          {w.text}
        </button>
      ))}
    </div>
  );
}
