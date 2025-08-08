# Cloak & Clue

A web-based social deduction word game built with Next.js 14, Tailwind CSS, shadcn/ui and Firebase.

## Naming Brainstorm
1. Blend In
2. Cloak & Clue ✅
3. Veiled Word
4. Undercover Word
5. Mimicry
6. Hidden Hint
7. Cipher Circle
8. Camouflage Party
9. Masked Clues
10. Imposter's Clue

"Cloak & Clue" is the chosen name used throughout the project.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Firebase Setup**
   - Create a Firebase project and enable Anonymous Auth and Firestore.
   - Configure env vars in `.env.local`:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
     ```
3. **Run the dev server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  app/                 // Next.js routes
  components/          // UI components
  lib/                 // Firebase, game logic
  styles/              // Tailwind helpers
  data/categories.seed.json
functions/             // Cloud Function stubs
firestore.rules        // Firestore security rules
```

## Testing

Run lints and tests:
```bash
npm run lint
npm test # (no tests yet)
```

## Post-MVP Polish Plan
- Better styling and animations using shadcn/ui primitives.
- Real-time countdown sync and presence heartbeats.
- Profanity filter for user-generated clues.
- Robust unit tests for security rules and game logic.

## Web Store Checklist
- App icons and splash images (512×512, 1024×1024).
- Social preview image (1200×630).
- Privacy policy and terms of service.
- Responsive screenshots for mobile and desktop.
- Store description and tags.

