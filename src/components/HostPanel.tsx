'use client';
import React from 'react';
import { ContentMode, Region } from '../lib/models';
import ModeToggle from './ModeToggle';
import RegionSelect from './RegionSelect';

interface Props {
  mode: ContentMode;
  region: Region;
  timers: { clue: number; debate: number; vote: number; guess: number };
  maxPlayers: number;
  onChange: (value: Partial<Props>) => void;
}

export default function HostPanel({ mode, region, timers, maxPlayers, onChange }: Props) {
  return (
    <div className="space-y-2">
      <ModeToggle mode={mode} onChange={(m) => onChange({ mode: m })} />
      <RegionSelect value={region} onChange={(r) => onChange({ region: r })} />
      <div>
        <label className="block text-sm">Max Players</label>
        <input
          type="number"
          className="border p-1"
          value={maxPlayers}
          min={3}
          max={20}
          onChange={(e) => onChange({ maxPlayers: parseInt(e.target.value, 10) })}
        />
      </div>
      <div>
        <label className="block text-sm">Timers (seconds)</label>
        {Object.entries(timers).map(([key, val]) => (
          <div key={key}>
            <label className="mr-2 capitalize">{key}</label>
            <input
              type="number"
              className="border p-1"
              value={val}
              onChange={(e) =>
                onChange({ timers: { ...timers, [key]: parseInt(e.target.value, 10) } })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
