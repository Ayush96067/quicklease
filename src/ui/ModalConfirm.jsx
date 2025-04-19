import styled from "styled-components";

const StyledConfirm = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 16px;
  padding: 1rem;
`;

function ModalConfirm({
  para,
  ConfrimText,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  return (
    <StyledConfirm>
      <h1 className="text-center text-2xl text-black">{para}</h1>
      <div>
        <Button
          onClick={onCloseModal}
          variation="secondary"
          disabled={disabled}
          className="bg-red-500 text-2xl text-white hover:bg-red-700"
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          onClick={() => console.log("hello")}
          disabled={disabled}
          className="bg-green-500 text-2xl text-white hover:bg-green-700"
        >
          {ConfrimText}
        </Button>
      </div>
    </StyledConfirm>
  );
}

export default ModalConfirm;
