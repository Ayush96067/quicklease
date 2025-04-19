import styled from "styled-components";

export const Button = styled.button`
  background-color: #bff000;
  color: black;
  padding: 0.6rem;
  border-radius: 12px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #a6d000;
  }

  &:disabled {
    cursor: no-drop;
    background-color: #6f8b01;
  }
`;
