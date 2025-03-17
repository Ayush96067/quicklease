import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  padding: 1rem;
  transition: all 0.7s;
  overflow: hidden;
`;

export const StyledTrandiv = styled.div`
  transition: all 1s;
  transition-delay: 2.5s;
`;

export const StyledDiv = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* gap: 5rem; */
  margin-top: 4rem;
`;

export const StyledUl = styled.ul`
  transition: all 1s;
`;

export const StyledList = styled.li`
  transition: all 0.5s;
  transition-delay: ${(props) => props.delay}s;
`;

export const StyledStrong = styled.strong`
  /* neon color */
  color: #bfff00;
`;

export const StyledButton = styled(Link)`
  background-color: #ace600;
  cursor: pointer;
  color: #0f0f0f;
  padding: 0.5rem 0.8rem;
  border-radius: 16px;
  transition: all 0.4s;
  border: 4px solid #ace600;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;
