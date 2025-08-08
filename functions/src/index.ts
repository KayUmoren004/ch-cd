/* eslint-disable */
import * as functions from 'firebase-functions';

export const createRoomFromQueue = functions.https.onCall(async (data, context) => {
  // TODO: implement room creation from matchmaking queue
  return { roomId: 'demo', code: 'ABC123' };
});

export const serverDealRound = functions.https.onCall(async (data, context) => {
  // TODO: implement server-side dealing of round
  return { ok: true };
});
