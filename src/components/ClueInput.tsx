'use client';
import React, { useState } from 'react';

interface Props {
  onSubmit: (clue: string) => void;
}

export default function ClueInput({ onSubmit }: Props) {
  const [clue, setClue] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(clue);
        setClue('');
      }}
      className="space-x-2"
    >
      <input
        className="border p-2"
        value={clue}
        onChange={(e) => setClue(e.target.value)}
        placeholder="Enter clue"
      />
      <button type="submit" className="border p-2 rounded">
        Send
      </button>
    </form>
  );
}
