import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ActivityEvent } from '../types/Event';

export interface ActivityStore {
  readonly list: Array<ActivityEvent>;
  readonly byId: Record<string, ActivityEvent>;
  readonly put: (event: ActivityEvent) => void;
}

export const useActivityStore = create<ActivityStore>()(
  devtools((set) => ({
    list: [],
    byId: {},
    put: (event) =>
      set((state) => {
        const i = state.list.findIndex((e) => e.id === event.id);

        if (i === -1) {
          state.list.push(event);
        } else {
          state.list[i] = {
            ...state.list[i],
            type: event.type,
            body: event.body,
            error: event.type === 'activity.error' ? event.error : undefined,
          };
        }

        // Update the byId lookup
        state.byId[event.body.id] = event;

        return {
          ...state,
          byId: { ...state.byId }
        };
      }),
  }))
);
