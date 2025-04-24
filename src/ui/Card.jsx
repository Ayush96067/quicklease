import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, name, Booked, imageSrc, price, company, address, description } =
    product;

  const shortDesc = description.slice(0, 200).concat(".....");

  return (
    <Card className="mt-5 h-fit w-full cursor-pointer overflow-hidden rounded-4xl shadow-white transition-all duration-500 hover:bg-gray-200">
      <Link to={`/products/${id}`}>
        <CardHeader color="blue-gray" className="h-96">
          <img
            src={imageSrc}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </CardHeader>
        <CardBody>
          <Typography
            color="blue-gray"
            className="mb-2 text-3xl text-black uppercase lg:text-[2.5rem]"
          >
            {/* Name */}
            {name}
          </Typography>
          <Typography className="text-lg text-gray-500 md:text-xl lg:text-2xl">
            {shortDesc}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="cursor-pointer rounded-4xl bg-blue-600 p-3 text-white transition-all duration-500 hover:scale-105 hover:bg-blue-700">
            Details
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
