import { Player } from './models';

export function assignChameleon(players: Player[]): { players: Player[]; chameleonId: string } {
  if (players.length === 0) return { players, chameleonId: '' };
  const index = Math.floor(Math.random() * players.length);
  const chameleonId = players[index].playerId;
  return {
    chameleonId,
    players: players.map((p, i) => ({
      ...p,
      roleForSelfOnly: i === index ? 'CHAMELEON' : 'CITIZEN',
    })),
  };
}
