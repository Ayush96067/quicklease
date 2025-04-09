import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  color: #686868;
  border: 1px solid white;
  border-radius: 16px;
  background-color: white;
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  &:disabled {
    background-color: #c6c6c6;
  }
`;

export default Textarea;
