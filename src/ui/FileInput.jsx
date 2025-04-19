import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    /* margin-right: 1.2rem; */
    border-radius: 16px;
    border: none;
    color: white;
    background-color: #574fff;
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: #4338ca;
    }
  }
`;

export default FileInput;
