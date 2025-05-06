import { AdaptiveCard } from '@microsoft/teams.cards';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CardStore {
  currentCard: AdaptiveCard | null;
  editingMessageId: string | null;
  draftMessage: string | null;
  targetComponent: 'compose' | 'edit' | null;
  processedCardIds: Set<string>;
  setCurrentCard: (card: AdaptiveCard | null, target?: 'compose' | 'edit') => void;
  setDraftMessage: (message?: string) => void;
  setEditingMessageId: (id: string | null) => void;
  clearCurrentCard: () => void;
  addProcessedCardId: (id: string) => void;
  clearProcessedCardIds: () => void;
}

export const useCardStore = create<CardStore>()(
  devtools((set) => ({
    currentCard: null,
    editingMessageId: null,
    draftMessage: null,
    targetComponent: null,
    processedCardIds: new Set<string>(),
    setCurrentCard: (card, target = 'compose') =>
      set((state) => ({
        currentCard: card,
        targetComponent: target,
        draftMessage: state.draftMessage,
      })),
    setDraftMessage: (message?: string) => set({ draftMessage: message ?? null }),
    setEditingMessageId: (id: string | null) => set({ editingMessageId: id }),
    clearCurrentCard: () => set({ currentCard: null, targetComponent: null }),
    addProcessedCardId: (id) =>
      set((state) => ({
        processedCardIds: new Set([...state.processedCardIds, id]),
      })),
    clearProcessedCardIds: () => set({ processedCardIds: new Set<string>() }),
  }))
);
