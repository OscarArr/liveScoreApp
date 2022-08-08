import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamData } from './TeamSlice';

import styled from 'styled-components';

const TeamView = () => {
  const dispatch = useDispatch()
  const team = useSelector((state) => state.team)

  useEffect(() => {
    dispatch(fetchTeamData())
  }, [dispatch])

  const StyledDiv = styled.div`


  `
  return (
    <StyledDiv>
      <h1>{team.NAME}</h1>
      <img src={team.IMAGE_PATH} alt={`${team.NAME} log`} />  
    </StyledDiv>
  )
}

export default TeamView