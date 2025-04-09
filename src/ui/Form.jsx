import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      /* padding: 2.4rem 4rem; */
      border: 1px solid #eeeeee;
    `}
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
