import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';

const counterStateSchema = z.object({
  value: z.number().min(0),
});

export type CounterState = z.infer<typeof counterStateSchema>;

const initialState: CounterState = counterStateSchema.parse({ value: 0 });

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const reducer = counterSlice.reducer;
