export type Region = 'US' | 'NA' | 'EU' | 'APAC' | 'LATAM' | 'Other';
export type ContentMode = 'FAMILY' | 'PARTY';
export type Phase = 'lobby' | 'deal' | 'clue' | 'debate' | 'vote' | 'reveal' | 'chameleonGuess' | 'score';

export interface Room {
  roomId: string;
  code: string;
  hostId: string;
  createdAt: number;
  region: Region;
  mode: ContentMode;
  timers: { clue: number; debate: number; vote: number; guess: number };
  maxPlayers: number;
  phase: Phase;
  roundNumber: number;
  isPublic: boolean;
}

export interface Player {
  playerId: string;
  displayName: string;
  joinedAt: number;
  lastSeen: number;
  score: number;
  roleForSelfOnly?: 'CHAMELEON' | 'CITIZEN';
}

export interface Round {
  roundId: string;
  categoryId: string;
  secretWordId: string;
  clues: Record<string,string>;
  votes: Record<string,string>;
  results?: {
    caught: boolean;
    chameleonId: string;
    chameleonGuess?: string;
    tablePoints: number;
    chameleonPoints: number;
  };
}

export interface CategoryBoard {
  categoryId: string;
  title: string;
  mode: ContentMode;
  words: { wordId: string; text: string }[];
}
