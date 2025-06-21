import { create } from 'zustand';

interface Task {
  title: string;
  time: string;
}

interface GameState {
  day: number;
  burnRate: number;
  mrr: number;
  morale: number;
  focus: number;
  tasks: Task[];
  addTask: (task: Task) => void;
  advanceDay: () => void;
}

interface AddTask {
    (task: Task): void;
}

interface AdvanceDay {
    (): void;
}

export const useGameStore = create<GameState>((set: (fn: (state: GameState) => Partial<GameState>) => void) => ({
    day: 1,
    burnRate: 3000,
    mrr: 0,
    morale: 80,
    focus: 100,
    tasks: [],
    addTask: ((task: Task) => set((state: GameState) => ({ tasks: [...state.tasks, task] }))) as AddTask,
    advanceDay: (() =>
        set((state: GameState) => ({
            day: state.day + 1,
            focus: Math.max(state.focus - 10, 0),
            morale: Math.max(state.morale - 5, 0),
            mrr: state.mrr + Math.floor(Math.random() * 500),
        }))) as AdvanceDay,
}));
