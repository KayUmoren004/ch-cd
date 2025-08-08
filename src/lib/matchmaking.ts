// Placeholder for matchmaking logic
export async function enqueue(region: string, requestedMax: number) {
  // TODO: call Cloud Function to join queue
  return { status: 'queued', region, requestedMax };
}
