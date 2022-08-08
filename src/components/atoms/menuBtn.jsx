import { useState } from 'react';
import styled from 'styled-components';

const MenuBtn = ({category}) => {
  const [open, setOpen] = useState(false);

  const setActive = () => {
    setOpen(!open);
  }
  
  const StyledMenuBtn = styled.button`
    background-color: ${open ? 'red' : 'green'};
    color: white;
    border-radius: 8px;
    height: 60px;
    width: 60px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      :hover {
        background-color: ${open ? 'darkred' : 'lightgreen'};
        box-shadow: 4px 4px 2px 2px rgba(0, 0, 0, 0.2);
            }
  `

  return (
    <StyledMenuBtn onClick={setActive}>{category}</StyledMenuBtn>
  )
}

export default MenuBtn