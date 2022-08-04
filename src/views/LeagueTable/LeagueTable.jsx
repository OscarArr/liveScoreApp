import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeagueTable } from './LeagueTableSlice';

const LeagueTableView = () => {
  const dispatch = useDispatch()
  const table = useSelector((state) => state.leagueTable)

  useEffect(() => {
    dispatch(fetchLeagueTable())
  }, [dispatch])
console.log("table", table)
  return (
    <ul>
      {table.map((team) => (
        <li key={team.TEAM_ID}>{team.TEAM_NAME}</li>
      ))}
    </ul>
  )
}

export default LeagueTableView