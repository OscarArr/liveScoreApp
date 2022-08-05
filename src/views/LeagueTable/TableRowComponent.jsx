import styled from "styled-components"

const TableRowComponent = ({ teamProp }) => {

  const goalDifference = () => {
    return ( teamProp.GOALS.split(":")[0] - teamProp.GOALS.split(":")[1] )
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
    <tr>
      <StyledRow>{teamProp.RANKING}</StyledRow>
      <StyledHeader>{teamProp.TEAM_NAME}</StyledHeader>
      <StyledRow>{teamProp.MATCHES_PLAYED}</StyledRow>
      <StyledRow>{teamProp.GOALS}</StyledRow>
      <StyledRow>{goalDifference()}</StyledRow>
      <StyledRow>{teamProp.POINTS}</StyledRow>
    </tr>
  )
}

export default TableRowComponent