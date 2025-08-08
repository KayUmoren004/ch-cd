'use client';
import React from 'react';
import { Region } from '../lib/models';

const regions: Region[] = ['US', 'NA', 'EU', 'APAC', 'LATAM', 'Other'];

interface Props {
  value: Region;
  onChange: (region: Region) => void;
}

export default function RegionSelect({ value, onChange }: Props) {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value as Region)}
    >
      {regions.map((r) => (
        <option key={r} value={r}>
          {r}
        </option>
      ))}
    </select>
  );
}
