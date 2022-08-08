import { configureStore } from '@reduxjs/toolkit';
import tableReducer from '../views/LeagueTable/LeagueTableSlice'
import teamReducer from '../views/TeamView/TeamSlice'

export const store = configureStore({
  reducer: {
    leagueTable: tableReducer,
    team: teamReducer
  },
});
