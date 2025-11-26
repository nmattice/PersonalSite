import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ToDo } from './models/models';
import { type RootState } from './redux/store';

type TaskState = {
  items: ToDo[],
};

const initialState: TaskState = {
  items: [],
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items?.push({
        id: Math.floor(Math.random()*(200000000 - 1 + 1) + 1),
        title: action.payload,
        isComplete: false
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items?.filter(item => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const task = state.items?.find(item => item.id === action.payload);
      if (task) {
        task.isComplete = !task.isComplete;
      }
    },
    edit: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const task = state.items?.find(item => item.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    }
  }
});

const selectToDos = (state: RootState) => state.todos.items;

export const selectCompletedTasks = createSelector(
  [selectToDos],
  (todos) => todos?.filter(todo => todo.isComplete)
);

export const selectIncompleteTasks = createSelector(
  [selectToDos],
  (todos) => todos?.filter(todo => !todo.isComplete)
);

export const { add, remove, toggleComplete, edit } = toDoSlice.actions;
export default toDoSlice.reducer;