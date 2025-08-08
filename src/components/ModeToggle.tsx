'use client';
import React from 'react';
import { ContentMode } from '../lib/models';

interface Props {
  mode: ContentMode;
  onChange: (mode: ContentMode) => void;
}

export default function ModeToggle({ mode, onChange }: Props) {
  return (
    <button
      className="border p-2 rounded"
      onClick={() => onChange(mode === 'FAMILY' ? 'PARTY' : 'FAMILY')}
    >
      Mode: {mode === 'FAMILY' ? 'Family-Friendly' : 'Party'}
    </button>
  );
}
