import styled from "styled-components";
import SpinnerMini from "./SpinnerMini";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background-color: white;
  color: #000000;
  padding: 1.2rem;
  border-radius: 16px;
  text-align: center;

  & p {
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 16px;
  transition: all ease-in-out 0.3s;
  padding: 1rem;
  &:hover {
    scale: 1.07;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <h1 className="text-5xl">Delete {resourceName}</h1>
      <p className="text-xl">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          className="bg-gray-300 text-xl"
          onClick={onCloseModal}
          variation="secondary"
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button
          className="bg-red-500 text-xl text-white"
          onClick={onConfirm}
          disabled={disabled}
        >
          {disabled ? <SpinnerMini /> : " Delete"}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
