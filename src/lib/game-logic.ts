import { Player, Round } from './models';

export function tallyVotes(round: Round): string | null {
  const counts: Record<string, number> = {};
  Object.values(round.votes).forEach((v) => {
    counts[v] = (counts[v] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted.length ? sorted[0][0] : null;
}

export function updateScores(players: Player[], round: Round) {
  // simple placeholder scoring
  return players.map((p) => ({ ...p, score: p.score + 1 }));
}
