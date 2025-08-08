'use client';
import React from 'react';

interface Props {
  secret: string;
  onClose: () => void;
}

export default function SecretPeekModal({ secret, onClose }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded shadow">
        <p className="mb-2">Secret Word:</p>
        <p className="font-bold mb-4">{secret}</p>
        <button className="border p-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
