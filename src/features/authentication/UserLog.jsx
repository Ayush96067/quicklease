import { useLogout } from "./useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import SpinnerMini from "../../ui/SpinnerMini";
import { useCurrentUser } from "./useCurrentUser";
import { Spinner } from "@material-tailwind/react";
import styled from "styled-components";
import { Button } from "../../ui/Button";
import toast from "react-hot-toast";
import { replace, useNavigate } from "react-router-dom";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  /* font-weight: 500;
  font-size: 1.4rem; */
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  /* width: 4rem; */
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user, isPending, isError } = useCurrentUser();
  const navigate = useNavigate();
  const { logout } = useLogout();

  if (isPending) return <Spinner />;

  if (isError) {
    toast.error("There is an error logging in");
    logout();
    navigate("/login", {
      replace: true,
    });
  }

  const { fullname, imagePath } = user.user_metadata;

  return (
    <StyledUserAvatar className="order-1 flex text-lg md:order-none md:text-[1.3rem] lg:text-2xl">
      <div className="flex items-center gap-5">
        <Avatar
          className="w-[4rem]"
          src={imagePath || "default-user.jpg"}
          alt={`${fullname}`}
        />
        {fullname}
      </div>
    </StyledUserAvatar>
  );
}

function Logout() {
  const { logout, isLoggingOut } = useLogout();

  return (
    <div className="flex justify-center">
      <Button
        className="cursor-pointer"
        disabled={isLoggingOut}
        onClick={logout}
      >
        {isLoggingOut ? (
          <SpinnerMini />
        ) : (
          <div className="flex items-center gap-3 p-2 text-[1.3rem] lg:text-3xl">
            Logout <HiArrowRightOnRectangle />
          </div>
        )}
      </Button>
    </div>
  );
}

function UserLog() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:gap-10">
      <UserAvatar />
      <Logout />
    </div>
  );
}
export default UserLog;
