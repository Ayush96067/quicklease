import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const { register, formState, handleSubmit, reset } = useForm();

  const { login, isLoggingin } = useLogin();

  const { errors } = formState;

  function onSubmit(e) {
    const email = e.email;
    const password = e.password;
    login(
      { email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[90%] flex-col gap-5 md:w-[30%] lg:gap-20"
    >
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          className="w-[100%]"
          type="text"
          id="email"
          disabled={isLoggingin}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          className="w-[100%]"
          disabled={isLoggingin}
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <div className="flex justify-end gap-5 lg:justify-center">
        <Button disabled={isLoggingin} type="reset">
          Reset
        </Button>
        <Button disabled={isLoggingin}>
          {isLoggingin ? <SpinnerMini /> : "Login"}{" "}
        </Button>
      </div>
    </Form>
  );
}
export default LoginForm;
