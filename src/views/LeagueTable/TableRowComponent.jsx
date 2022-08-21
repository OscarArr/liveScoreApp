import styled from "styled-components"
import { Link } from 'react-router-dom';
import { fetchTeamData } from '../TeamView/TeamSlice';
import { useSelector, useDispatch } from 'react-redux';

const TableRowComponent = ({ teamProp }) => {

  const dispatch = useDispatch()

  const goalDifference = () => {
    return ( teamProp.GOALS.split(":")[0] - teamProp.GOALS.split(":")[1] )
  }

  const setTeam = (teamId) => {
    console.log(teamId, "teamId")
    dispatch(fetchTeamData({
      params: {
        locale: 'en_GB',
        sport_id: '1',
        // team_id will be dynamic 
        team_id: teamId
      }
    }))
  }

  const StyledHeader = styled.th`
    text-align: left;
    font-weight: 700;
    /* margin-left: 10px; */
    border-left: 1px solid black;
    padding: 0 10px;
  `
  const StyledRow = styled.td`
    border-left: 1px solid black;
    padding: 0 10px;

  `


  return (
    <tr onClick={() => setTeam(teamProp.TEAM_ID)}>
      <StyledRow>{teamProp.RANKING}</StyledRow>
      <StyledHeader>
        <Link to="/team">{teamProp.TEAM_NAME}</Link>
      </StyledHeader>
      <StyledRow>{teamProp.MATCHES_PLAYED}</StyledRow>
      <StyledRow>{teamProp.GOALS}</StyledRow>
      <StyledRow>{goalDifference()}</StyledRow>
      <StyledRow>{teamProp.POINTS}</StyledRow>
    </tr>
  )
}

export default TableRowComponent