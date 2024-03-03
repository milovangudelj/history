import { create } from "zustand";

interface HistoryState {
  urls: string[];
  currentIndex: number;
}

interface HistoryActions {
  visited: (urls: string) => void;
  back: () => void;
  forward: () => void;
  currentEntry: () => string;
  lastEntry: () => string;
  isEmpty: () => boolean;
  reset: () => void;
}

export interface History extends HistoryState, HistoryActions {}

const initialState: HistoryState = {
  urls: [],
  currentIndex: -1,
};

export const useHistory = create<History>()((set, get) => ({
  ...initialState,
  visited: (url) => {
    const persisted = get().urls.slice(0, get().currentIndex + 1);

    set((state) => ({
      urls: [...persisted, url],
      currentIndex: persisted.length,
    }));
  },
  back: () =>
    set((state) => ({
      currentIndex: Math.max(0, state.currentIndex - 1),
    })),
  forward: () => {
    set((state) => ({
      currentIndex: Math.min(state.urls.length - 1, state.currentIndex + 1),
    }));
  },
  currentEntry: () => get().urls[get().currentIndex],
  lastEntry: () => get().urls[get().currentIndex],
  isEmpty: () => get().urls.length === 0,
  reset: () => set(initialState),
}));
