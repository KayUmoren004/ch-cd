'use client';
import React from 'react';

interface Props {
  seconds: number;
}

export default function TimerDisplay({ seconds }: Props) {
  return <div className="font-mono">{seconds}s</div>;
}
