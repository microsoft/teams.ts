import { createContext } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Metadata } from '../types/Metadata';

export interface MetadataStore {
  readonly metadata?: Metadata;
  readonly set: (metadata: Metadata) => void;
}

export const useMetadataStore = create<MetadataStore>()(
  devtools((set) => ({
    set: (metadata) =>
      set((state) => {
        return { ...state, metadata };
      }),
  }))
);

export const MetadataContext = createContext<MetadataStore>(null as any);
MetadataContext.displayName = 'MetadataContext';
