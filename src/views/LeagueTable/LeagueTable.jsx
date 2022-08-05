import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeagueTable } from './LeagueTableSlice';
import TableRowComponent from './TableRowComponent';
import styled from 'styled-components';

const LeagueTableView = () => {
  const dispatch = useDispatch()
  const table = useSelector((state) => state.leagueTable)

  useEffect(() => {
    dispatch(fetchLeagueTable())
  }, [dispatch])

  const StyledTd = styled.td`
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
  `

  return (
    <table>
      <thead>
        <StyledTd>Pos</StyledTd>
        <StyledTd>Team</StyledTd>
        <StyledTd>GP</StyledTd>
        <StyledTd>GF/GA</StyledTd>
        <StyledTd>GD</StyledTd>
        <StyledTd>P</StyledTd>
      </thead>
      <tbody>
        {table.map((team) => (
          <TableRowComponent teamProp={team} key={team.TEAM_ID}></TableRowComponent>
        ))}
      </tbody>
    </table>
  )
}

export default LeagueTableView