import styled from "styled-components";
import { useCurrentUser } from "../authentication/useCurrentUser";
import Spinner from "../../ui/Spinner";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  color: gray;
`;

const Avatar = styled.img`
  display: block;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const StyledH1 = styled.h1`
  width: 100%;
  overflow: auto;
  color: #ffffff;
  /* background: #000000; */
  background: linear-gradient(to right, #484848, #151515);
  border-bottom-left-radius: 16px;
  border-top-right-radius: 16px;
  text-align: center;
`;

function Profile() {
  const { user, isPending } = useCurrentUser();
  if (isPending)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );

  const data = user.identities[0].identity_data;

  return (
    <div className="flex flex-col gap-10 p-3 text-xl text-white md:text-3xl lg:text-4xl">
      <div className="flex flex-col gap-10 lg:flex-row">
        <StyledUserAvatar className="justify-center lg:justify-start">
          <Avatar
            src={data.imagePath || "default-user.jpg"}
            alt={data.fullname}
            className="w-[10em] lg:w-[20em]"
          />
        </StyledUserAvatar>
        <div className="grid w-full grid-cols-2 place-items-center gap-4 lg:gap-10">
          <StyledH1 className="p-2 lg:p-5">Name : {data.fullname}</StyledH1>
          <StyledH1 className="p-2 lg:p-5">Phone : {data.phone}</StyledH1>
          <StyledH1 className="p-2 lg:p-5">DOB : {data.dob}</StyledH1>
          <StyledH1 className="p-2 lg:p-5">Email : {data.email}</StyledH1>
        </div>
      </div>
      <div className="flex gap-4 lg:gap-10">
        <StyledH1 className="p-2 lg:w-[50%] lg:p-5">
          Address : {data.address}
        </StyledH1>
        <StyledH1 className="p-2 lg:w-[50%] lg:p-5">
          Pincode : {data.pincode}
        </StyledH1>
      </div>
    </div>
  );
}
export default Profile;
