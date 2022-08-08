import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchLeagueTable } from '../../api/fetchLeagueTable'
import axios from "axios"
import baseAxios from '../../api/config'

const baseAxio = baseAxios

// hämtar data för lag, för dynamik ändra i params. team_id för byte av liga.
export const fetchTeamData = createAsyncThunk(
  'team/fetchTeamData',
  async () => {
      const teamdata = await axios.get('teams/data', 
      {  params: {
          locale: 'en_GB',
          sport_id: '1',
          // team_id will be dynamic 
          team_id: '2wZHnGDH'
      }})
      console.log(teamdata.data.DATA, "teamData");
      return teamdata.data.DATA
  }
)

// export const getLeagueTable = createAsyncThunk(
//   'LeagueTable/getLeagueTable',
//     fetchLeagueTable()
// )

export const teamSlice = createSlice({
  name: 'team',
  initialState: [

  ],
  reducers: {

  },
  extraReducers: {
    [fetchTeamData.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})

export default teamSlice.reducer