import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard() {
  return (
    <Card className="mt-5 h-full w-full overflow-hidden rounded-4xl shadow-white transition-all duration-500 hover:bg-gray-200">
      <CardHeader color="blue-gray" className="h-96">
        <img
          src="img1.jpg"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2 text-3xl lg:text-4xl">
          {/* Name */}
          UI/UX Review Check
        </Typography>
        <Typography>
          {/* Short description */}
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="cursor-pointer rounded-4xl bg-blue-600 p-3 text-white transition-all duration-500 hover:scale-105 hover:bg-blue-700">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
