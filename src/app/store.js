import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tableReducer from '../views/LeagueTable/LeagueTableSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    leagueTable: tableReducer
  },
});
