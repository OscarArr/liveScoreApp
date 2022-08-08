import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchLeagueTable } from '../../api/fetchLeagueTable'
import axios from "axios"
import baseAxios from '../../api/config'

const baseAxio = baseAxios

// hämtar allsvenskan, för dynamik ändra i params. stage_id för byte av liga.
export const fetchLeagueTable = createAsyncThunk(
  'table/fetchLeagueTable',
  async () => {
      const leaguetable = await axios.get('tournaments/standings', 
      {  params: {
          locale: 'en_GB',
          standing_type: 'overall',
          tournament_stage_id: '2XDiHi8l',
          tournament_season_id: 'fe7Tj3F6'
      }})
      // console.log(leaguetable.data.DATA[0].ROWS);
      return leaguetable.data.DATA[0].ROWS
  }
)

// export const getLeagueTable = createAsyncThunk(
//   'LeagueTable/getLeagueTable',
//     fetchLeagueTable()
// )

export const leagueTableSlice = createSlice({
  name: 'leagueTable',
  initialState: [

  ],
  reducers: {

  },
  extraReducers: {
    [fetchLeagueTable.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})

export default leagueTableSlice.reducer