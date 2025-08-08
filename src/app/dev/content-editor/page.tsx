'use client';
import React, { useState } from 'react';
import ModeToggle from '../../../components/ModeToggle';
import BoardGrid from '../../../components/BoardGrid';
import { loadBoards } from '../../../lib/content';
import { ContentMode } from '../../../lib/models';

export default function ContentEditorPage() {
  const [mode, setMode] = useState<ContentMode>('FAMILY');
  const boards = loadBoards(mode);
  const first = boards[0];

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl">Content Editor</h1>
      <ModeToggle mode={mode} onChange={setMode} />
      {first && (
        <div className="space-y-2">
          <h2 className="font-semibold">{first.title}</h2>
          <BoardGrid board={first} />
        </div>
      )}
      <p className="text-sm text-gray-500">Total boards: {boards.length}</p>
    </main>
  );
}
