import { useState } from "react";
import { useEditProductColumn } from "../features/User/useEditProductColumn";
import { Button } from "./Button";
import SpinnerMini from "./SpinnerMini";
import Menus from "./Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteProduct } from "../features/Products/useDeleteProduct";
import EditProduct from "../features/User/EditProduct";
import Product from "../features/Products/Product";
import { useNavigate } from "react-router-dom";

function ProductRow(products) {
  const { id, name, company, price, category, imageSrc, Booked } =
    products.product;
  const navigate = useNavigate();

  const [booked, setBooked] = useState(Booked);
  const { editProductColumn, isEditing } = useEditProductColumn();
  const { deleteProduct, isDeleting } = useDeleteProduct();

  function seeDetails() {
    navigate(`/products/${id}`, { replace: true });
  }

  function handleClick(id) {
    const updatedBook = !booked;
    setBooked(updatedBook);
    editProductColumn({ column: "Booked", value: updatedBook, id });
  }

  return (
    <tr className="group relative cursor-pointer uppercase transition-all duration-[.5s] hover:bg-white">
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
      <td>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}> Edit</Menus.Button>
              </Modal.Open>
              <Menus.Button onClick={() => seeDetails()} icon={<HiEye />}>
                See details
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="delete">
            <ConfirmDelete
              disabled={isDeleting}
              resourceName="Product"
              onConfirm={() => deleteProduct(id)}
            />
          </Modal.Window>
          <Modal.Window name="edit">
            <EditProduct product={products.product} />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}
export default ProductRow;
