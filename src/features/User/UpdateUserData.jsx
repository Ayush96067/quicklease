import { useState } from "react";
import { Button } from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserData() {
  const {
    user: {
      email,
      user_metadata: { fullname: currFullName },
    },
  } = useCurrentUser();

  const [fullname, setFullname] = useState(currFullName);
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullname) return;
    updateUser(
      { fullname, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  }

  function handleCancel() {
    setFullname(currFullName);
    avatar(null);
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>Change User data</h1>
      <div className="rounded-2xl p-6">
        <Form className="text-lg md:text-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-7">
            <FormRow label="Email address">
              <Input disabled value={email} />
            </FormRow>
            <FormRow label="Fullname">
              <Input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                id="fullName"
                disabled={isUpdatingUser}
              />
            </FormRow>

            <FormRow label="Avatar image">
              <FileInput
                id="avatar"
                accept="image/*"
                disabled={isUpdatingUser}
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </FormRow>
          </div>

          <FormRow>
            <Button
              type="reset"
              disabled={isUpdatingUser}
              variation="secondary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button disabled={isUpdatingUser}>Update account</Button>
          </FormRow>
        </Form>
      </div>
    </div>
  );
}
export default UpdateUserData;
