import { Card } from '@microsoft/spark.cards';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CardStore {
  currentCard: Card | null;
  targetComponent: 'compose' | 'edit' | null;
  processedCardIds: Set<string>;
  setCurrentCard: (card: Card | null, target?: 'compose' | 'edit') => void;
  clearCurrentCard: () => void;
  addProcessedCardId: (id: string) => void;
  clearProcessedCardIds: () => void;
}

export const useCardStore = create<CardStore>()(
  devtools((set) => ({
    currentCard: null,
    targetComponent: null,
    processedCardIds: new Set<string>(),
    setCurrentCard: (card, target = 'compose') => set({ currentCard: card, targetComponent: target }),
    clearCurrentCard: () => set({ currentCard: null, targetComponent: null }),
    addProcessedCardId: (id) => set((state) => ({
      processedCardIds: new Set([...state.processedCardIds, id])
    })),
    clearProcessedCardIds: () => set({ processedCardIds: new Set<string>() }),
  }))
);
