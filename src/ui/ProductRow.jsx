import { useState } from "react";
import { useEditProduct } from "../features/User/useEditProduct";
import { Button } from "./Button";
import SpinnerMini from "./SpinnerMini";

function ProductRow(product) {
  const { id, name, company, price, category, imageSrc, Booked } =
    product.product;
  const [booked, setBooked] = useState(Booked);
  const { editProduct, isEditing } = useEditProduct();

  function handleClick(id) {
    const updatedBook = !booked;
    setBooked(updatedBook);
    editProduct({ column: "Booked", value: updatedBook, id });
  }

  return (
    <tr className="cursor-pointer uppercase hover:bg-white">
      <td className="p-2">
        <div className="flex w-52 items-center lg:w-full">
          <div className="mr-2 flex-shrink-0 bg-black sm:mr-3">
            <img className="h-[5rem] w-[5rem]" src={imageSrc} alt={name} />
          </div>
          <div className="font-medium text-gray-800">{name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{company}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">{price}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{category}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="flex w-full justify-center">
          <Button onClick={() => handleClick(id)} className="">
            {isEditing ? <SpinnerMini /> : Booked ? "Yes" : "No"}
          </Button>
        </div>
      </td>
    </tr>
  );
}
export default ProductRow;
