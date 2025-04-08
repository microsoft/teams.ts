import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ActivityEvent } from '../types/Event';

export interface ActivityStore {
  readonly list: Array<ActivityEvent>;
  readonly byId: Record<string, ActivityEvent>;
  readonly put: (event: ActivityEvent) => void;
  readonly findByMessageId: (messageId: string) => ActivityEvent | undefined;
}

export const useActivityStore = create<ActivityStore>()(
  devtools((set, get) => ({
    list: [],
    byId: {},
    put: (event) =>
      set((state) => {
        const i = state.list.findIndex((e) => e.id === event.id);
        const list = [...state.list];
        const byId = { ...state.byId };

        if (i === -1) {
          list.push(event);
        } else {
          list[i] = {
            ...state.list[i],
            type: event.type,
            body: event.body,
            error: event.type === 'activity.error' ? event.error : undefined,
          };
        }

        // Update the byId lookup
        byId[event.id] = event;

        return {
          list: list,
          byId: byId,
        };
      }),
    findByMessageId: (messageId: string) => {
      const state = get();
      return state.list.find(event => event.body?.id === messageId);
    },
  }))
);
