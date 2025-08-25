// src/nextbest/scorer.ts
import { MoveSuggestion } from "./types";

// Simple scoring placeholder
export function scoreMoves(moves: string[]): MoveSuggestion[] {
  return moves.map((m, i) => ({
    move: m,
    score: Math.random(), // TODO: replace with real damage calc
    reason: "Placeholder scoring"
  }));
}