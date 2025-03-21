import { Card } from '@microsoft/spark.cards';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface CardStore {
  readonly currentCard: Card | null;
  readonly setCurrentCard: (card: Card) => void;
  readonly clearCurrentCard: () => void;
}

export const useCardStore = create<CardStore>()(
  devtools((set) => ({
    currentCard: null,
    setCurrentCard: (card: Card) => set({ currentCard: card }),
    clearCurrentCard: () => set({ currentCard: null }),
  }))
);
