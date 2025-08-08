'use client';
import React from 'react';
import { Phase } from '../lib/models';

export default function PhaseBanner({ phase }: { phase: Phase }) {
  return <div className="p-2 bg-gray-200 rounded">Phase: {phase}</div>;
}
