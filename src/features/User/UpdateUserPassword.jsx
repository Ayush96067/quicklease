import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSearchParams } from "react-router-dom";
import supabase from "../../services/supabase";
import { useEffect } from "react";

function UpdateUserPassword() {
  const { formState, handleSubmit, register, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("access_token"));

  // useEffect(() => {
  //   // const token = supabase.auth.session()?.access_token;
  //   // console.log(token);

  //   const token = supabase.auth.getSession()?.access_token;
  //   console.log(token);

  //   if (!token) {
  //     console.error("No access token available. Redirecting...");
  //     // Redirect to an error or login page if token is missing
  //     window.location.href = "/login";
  //   }
  // }, []);

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>Change User data</h1>
      <div className="w-full rounded-2xl p-6 lg:w-[30%]">
        <Form className="text-lg md:text-2xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full flex-col gap-7">
            <FormRow label="Password" error={errors?.password?.message}>
              <Input
                type="password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
                id="password"
              />
            </FormRow>

            <FormRow
              label="Confirm Password"
              error={errors?.confirmPassword?.message}
            >
              <Input
                type="password"
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    getValues().password === value || "Passwords need to match",
                })}
                id="confirmPassword"
              />
            </FormRow>

            <FormRow>
              <Button
                type="reset"
                disabled={isUpdatingUser}
                variation="secondary"
              >
                Cancel
              </Button>
              <Button disabled={isUpdatingUser}>
                {isUpdatingUser ? <SpinnerMini /> : "Change Password"}
              </Button>
            </FormRow>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default UpdateUserPassword;
