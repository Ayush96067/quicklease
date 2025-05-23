import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import { useCurrentUser } from "../authentication/useCurrentUser";
import Textarea from "../../ui/Textarea";
import { Option, Select } from "../../ui/Select";
import { useAddProduct } from "./useAddProduct";
import SpinnerMini from "../../ui/SpinnerMini";

function AddProduct() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { createProduct, isPending } = useAddProduct();
  const { user } = useCurrentUser();

  function onSubmit(e) {
    createProduct(e, {
      onSuccess: reset,
    });
  }

  return (
    <div className="flex flex-col gap-10 p-4">
      <h1 className="text-center">Add Product</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3.5 text-[1rem] md:gap-5 md:text-2xl lg:gap-10"
      >
        <div className="grid grid-cols-2 justify-between gap-5 md:gap-10 lg:gap-16">
          <FormRow label="UserID" error={errors?.userid?.message}>
            <Input
              type="text"
              defaultValue={user.id}
              {...register("userid")}
              disabled={true}
            />
          </FormRow>

          <FormRow label="Name" error={errors?.name?.message}>
            <Input
              type="text"
              disabled={isPending}
              placeholder="Dell Laptop"
              id="name"
              {...register("name", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow label="Company" error={errors?.company?.message}>
            <Input
              type="text"
              disabled={isPending}
              id="company"
              placeholder="Dell"
              {...register("company", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow label="Rent Price" error={errors?.price?.message}>
            <Input
              type="number"
              disabled={isPending}
              id="price"
              placeholder="'0' for renting free.."
              {...register("price", { required: "This field is required" })}
            />
          </FormRow>
        </div>

        <FormRow label="Description" error={errors?.description?.message}>
          <Textarea
            type="text"
            id="description"
            disabled={isPending}
            placeholder="A brief description of the product , its features, model, years used and other necessary details..."
            {...register("description", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Address - [ you can change the address ]"
          error={errors?.address?.message}
        >
          <Input
            type="text"
            id="address"
            disabled={isPending}
            defaultValue={user.identities[0].identity_data.address}
            {...register("address", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Product Image" error={errors?.imageSrc?.message}>
          <FileInput
            id="prodImage"
            accept="images/*"
            {...register("imageSrc", {
              required: "Please select an image",
            })}
            disabled={isPending}
          />
        </FormRow>
        <FormRow label="Category" error={errors?.category?.message}>
          <Select
            name="cars"
            id="cars"
            {...register("category", { required: true })}
            disabled={isPending}
          >
            <Option value="" disabled>
              Select Category
            </Option>
            <Option value="electronics">Electronics</Option>
            <Option value="study">Study & Education</Option>
            <Option value="furniture">Furniture</Option>
            <Option value="home_appliances">Home Appliances</Option>
            <Option value="vehicle">Vehicle</Option>
            <Option value="accomodation">Accomodation</Option>
            <Option value="sports">Sports & Fitness</Option>
            <Option value="events">Events & Party Essentials</Option>
            <Option value="tools_hardware">Tools & Hardware</Option>
            <Option value="kids">Baby & Kids</Option>
            <Option value="travel_camping">Travel & Camping</Option>
          </Select>
        </FormRow>

        <div className="flex gap-5 text-2xl" disabled={isPending}>
          <div className="ms-2">
            <label
              htmlFor="delivary"
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              Delivary Available
              <p
                id="helper-checkbox-text"
                className="text-sm font-normal text-gray-500 dark:text-gray-300"
              >
                Product can be shipped to user
              </p>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="delivary"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              className="h-4 scale-[2] rounded-sm border-none lg:scale-[2.5]"
              {...register("delivary_available")}
            />
          </div>
        </div>
        <div className="flex justify-end gap-5 lg:justify-center">
          <Button type="reset">Cancel</Button>
          <Button>
            {isPending ? (
              <>
                <SpinnerMini />{" "}
              </>
            ) : (
              "Add Product"
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default AddProduct;
