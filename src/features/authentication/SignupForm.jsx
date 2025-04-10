import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import { Button } from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { signup, isSigningup } = useSignup();
  const navigate = useNavigate();
  const { errors } = formState;

  function onSubmit(e) {
    signup(e, {
      onSettled: () => {
        reset();
        navigate("/login");
      },
    });
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3.5 md:gap-5 lg:gap-10"
    >
      <div className="flex justify-between gap-3 md:gap-10 lg:gap-16">
        <FormRow label="FullName" error={errors?.fullname?.message}>
          <Input
            type="text"
            id="fullname"
            {...register("fullname", { required: "This field is required" })}
            disabled={isSigningup}
          />
        </FormRow>

        <FormRow label="Phone no." error={errors?.phone?.message}>
          <Input
            type="text"
            disabled={isSigningup}
            id="phone"
            {...register("phone", { required: "This field is required" })}
          />
        </FormRow>
      </div>

      <FormRow label="DOB" error={errors?.dob?.message}>
        <Input
          type="date"
          disabled={isSigningup}
          id="dob"
          {...register("dob", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Address" error={errors?.address?.message}>
        <Input
          type="text"
          disabled={isSigningup}
          id="address"
          {...register("address", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Pincode" error={errors?.pincode?.message}>
        <Input
          type="number"
          disabled={isSigningup}
          id="pincode"
          {...register("pincode", { required: "This field is required" })}
        />
      </FormRow>

      <div className="flex flex-col gap-3 md:gap-10 lg:flex-row lg:gap-16">
        <FormRow label="Avatar-[only image]" error={errors?.imageSrc?.message}>
          <FileInput
            disabled={isSigningup}
            id="avatar"
            accept="images/*"
            {...register("imageSrc")}
          />
        </FormRow>

        <FormRow label="Aadhar-[pdf]" error={errors?.aadhar?.message}>
          <FileInput
            id="aadhar"
            disabled={isSigningup}
            accept="application/pdf"
            {...register("aadhar", { required: "This field is required" })}
          />
        </FormRow>
      </div>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          disabled={isSigningup}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide valid email address",
            },
          })}
        />
      </FormRow>

      <div className="flex justify-between gap-3 md:gap-10 lg:gap-16">
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            disabled={isSigningup}
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

        <FormRow
          label="Confrim Password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="confirmPassword"
            disabled={isSigningup}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>
      </div>
      <div className="flex justify-end gap-5 lg:justify-center">
        <Button disabled={isSigningup} type="reset">
          Cancel
        </Button>
        <Button disabled={isSigningup}>
          {" "}
          {isSigningup ? <SpinnerMini /> : "Create new user"}
        </Button>
      </div>
    </Form>
  );
}
export default SignupForm;
