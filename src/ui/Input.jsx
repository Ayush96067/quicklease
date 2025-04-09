import styled from "styled-components";

const Input = styled.input`
  border: 1px solid white;
  border-radius: 16px;
  padding: 0.8rem 1.2rem;
  background-color: white;
  color: #686868;
  display: flex;
  &:disabled {
    background-color: #c6c6c6;
  }
`;

export default Input;
