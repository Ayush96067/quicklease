import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetOrder } from "../User/useGetOrder";
import PageSpinner from "../../ui/PageSpinner";

const Product = () => {
  const { id } = useParams();
  const { product, isLoading } = useGetOrder({ column: "id", value: id });

  if (isLoading) return <PageSpinner />;
  console.log(product);

  return <div className="min-h-screen">Product</div>;
};

export default Product;
