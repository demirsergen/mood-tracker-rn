import { create } from 'zustand';
import { Entry } from './interfaces';

export interface EntryState {
  entries: Array<Entry>;
  addEntry: (entry: Entry) => void;
}

const useEntryStore = create<EntryState>((set) => ({
  entries: [
    {
      id: 0,
      high: 'Waking up.',
      low: 'Having to go to work.',
      rating: 5,
      date: new Date(),
    },
    {
      id: 1,
      high: 'Waking up.',
      low: 'Having to go to work.',
      rating: 5,
      date: new Date(),
    },
  ],
  addEntry: (entry: Entry) =>
    set((state) => {
      const hasEntry = state.entries.find((p) => p.id === entry.id);
      if (hasEntry) {
        return {
          entries: state.entries.map((p) => {
            if (p.id === entry.id) {
              return {
                ...p,
              };
            } else {
              return {
                entries: [...state.entries, { ...entry }],
              };
            }
          }),
        };
      }
    }),
}));

export default useEntryStore;
