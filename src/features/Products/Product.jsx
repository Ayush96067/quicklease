import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOrder } from "../User/useGetOrder";
import PageSpinner from "../../ui/PageSpinner";
import styled from "styled-components";
import { Button } from "../../ui/Button";
import Modal from "../../ui/Modal";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useForm } from "react-hook-form";
import { useBooking } from "./useBooking";
import SpinnerMini from "../../ui/SpinnerMini";

const Span = styled.span`
  color: #bfc3cb;
`;

const Product = () => {
  const { isBooking } = useBooking();
  const { id } = useParams();

  const { product, isLoading } = useGetOrder({ column: "id", value: id });

  if (isLoading) return <PageSpinner />;

  const {
    userid: ownerID,
    name,
    category,
    company,
    Booked,
    address,
    price,
    imageSrc,
    description,
    delivary_available,
  } = product[0];

  return (
    <div className="flex min-h-[100vh] flex-col gap-10 p-[2.5rem] text-2xl md:text-5xl lg:p-[4rem] lg:text-4xl">
      <h1 className="mt-[4rem] text-center uppercase lg:mt-[10rem]">
        Rent Item
      </h1>
      <div className="flex h-full flex-col gap-10 font-medium lg:flex-row">
        <img
          src={imageSrc}
          alt={name}
          className={`w-[60rem] ${Booked && "grayscale-100"}`}
        />
        <div className="flex flex-col gap-10">
          <h1 className="text-center font-bold text-orange-400 uppercase lg:text-5xl">
            {name}
          </h1>

          <p className="text-xl uppercase lg:text-3xl">
            Company : <Span> {company}</Span>
          </p>
          <p className="text-xl uppercase lg:text-3xl">
            Category :<Span> {category}</Span>{" "}
          </p>
          <div>
            <p className="capitalize">
              Address : <Span> {address}</Span>{" "}
            </p>
            <p
              className={`${delivary_available ? "text-green-500" : "text-red-500"} text-xl lg:text-3xl`}
            >
              {delivary_available
                ? "Delivary available"
                : "Delivary not Available"}
            </p>
          </div>
          <p className="text-xl capitalize lg:text-4xl">
            Description : <Span> {description}</Span>
          </p>
          <p className="uppercase">
            Price/Rent : <Span className="capitalize">{price} ₨./day</Span>
          </p>
          <p className={Booked ? "text-red-500" : "text-green-500"}>
            Booking Available : {Booked ? "No" : "Yes"}
          </p>
          <div className="flex flex-col gap-6">
            <Modal>
              <Modal.Open opens="book">
                <Button
                  disabled={Booked}
                  className={`flex w-fit items-center justify-center gap-3`}
                >
                  {Booked ? (
                    "Out of Order"
                  ) : isBooking ? (
                    <SpinnerMini />
                  ) : (
                    "Start Booking"
                  )}
                </Button>
              </Modal.Open>

              <Modal.Window name="book">
                <ModalForm
                  ownerID={ownerID}
                  id={id}
                  delivary_available={delivary_available}
                />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

function ModalForm({ onCloseModal, ownerID, id, delivary_available }) {
  const { handleSubmit, register, formState } = useForm();
  const [check, setCheck] = useState(false);
  const { user, isPending } = useCurrentUser();
  const { booking, isBooking } = useBooking();

  if (isPending) return;
  const {
    id: buyerID,
    user_metadata: { phone, address: useAddress },
  } = user;

  const { errors } = formState;

  let BookingDetails;

  function onSubmit(e) {
    e.delivaryCheck = check;
    let address = "";

    const { delivaryCheck, buyerPhone, returnDate, startDate } = e;
    if (delivaryCheck) address = e.address;
    BookingDetails = {
      product_id: id,
      startDate,
      returnDate,
      delivaryCheck,
      buyerPhone,
      address,
      ownerID,
      buyerID,
    };

    booking(BookingDetails, {
      onSuccess: onCloseModal(),
    });
  }
  return (
    <div className="w-full text-lg text-black lg:text-2xl">
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
        <div className="flex gap-6">
          <FormRow label="Starting Date" error={errors?.startDate?.message}>
            <Input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              {...register("startDate", {
                required: "Please provide ordering date",
              })}
            />
          </FormRow>
          <FormRow label="Starting Date" error={errors?.returnDate?.message}>
            <Input
              type="date"
              {...register("returnDate", {
                required: "Please provide return date date",
              })}
            />
          </FormRow>
        </div>
        {!delivary_available && (
          <div className="flex w-full items-center gap-4 lg:gap-6">
            <div>
              <h1 className="text-xl lg:text-3xl">
                Want us to deliver the product
              </h1>

              <p className="text-base lg:text-xl">
                {" "}
                Since delivary is not available!{" "}
                <span className="font-bold text-red-500">
                  ( Extra Charges applicable )
                </span>
              </p>
            </div>
            <input
              id="delivary"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              onChange={() => setCheck((val) => !val)}
              className="h-4 scale-[2] rounded-sm border-none lg:scale-[2.5]"
            />
          </div>
        )}
        {check && (
          <FormRow label="Delivery Address" error={errors?.address?.message}>
            <Input
              type="text"
              className="w-full"
              defaultValue={useAddress}
              {...register("address")}
            />
          </FormRow>
        )}
        <FormRow label="Phone" error={errors?.phone?.message}>
          <Input
            type="text"
            className="w-full"
            defaultValue={phone}
            {...register("buyerPhone", {
              required: "Please provide Phone number",
            })}
          />
        </FormRow>

        <Button type="submit">{isBooking ? <SpinnerMini /> : "Book"}</Button>
      </Form>
    </div>
  );
}

export default Product;
