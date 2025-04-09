import { useCurrentUser } from "../features/authentication/useCurrentUser";
import Spinner from "../ui/Spinner";
import UserDetails from "../features/User/UserDetails";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
`;

function User() {
  const { user, isPending } = useCurrentUser();
  if (user === null)
    return (
      <div className="flex min-h-[100vh] items-center justify-center text-center text-2xl lg:text-8xl">
        No user found!😥 <br />
        Please login to your account {":)"}
      </div>
    );
  if (isPending)
    return (
      <div className="flex min-h-[100vh] items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <StyledDiv className="w-full">
      <div className="grid min-h-[100vh] grid-rows-[15%_auto]">
        <div className="flex flex-col gap-4 self-end border-b border-b-white p-3 lg:p-6">
          <h1 className="text-4xl lg:text-8xl">User Account Section</h1>
        </div>
        <UserDetails user={user} />
      </div>
    </StyledDiv>
  );
}

export default User;
