import { createContext } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Card } from '@microsoft/spark.cards';

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

export const CardContext = createContext<CardStore>(null as any);
