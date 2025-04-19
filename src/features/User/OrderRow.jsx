import { Button } from "../../ui/Button";

function OrderRow(products) {
  const { name, company, price, category, imageSrc, Booked } = products.product;

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
          <Button>Booked</Button>
        </div>
      </td>
    </tr>
  );
}

export default OrderRow;
