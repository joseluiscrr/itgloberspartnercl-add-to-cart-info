import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import ProductGroup from "./ProductGroup";
import Totalizers from "./Totalizers";
import ButtonGroup from "./ButtonGroup";

const AddToCartInfo = () => {
  const productInfo = useProduct();
  console.log("Este producto tiene esta info", productInfo);

  const { orderForm: {items, totalizers} } = useOrderForm();
  console.log("Este es la información de la órden", items, totalizers);

  return (
    <>
      <ProductGroup />  {/* Listado de productos */}
      <Totalizers />    {/* Valor total */}
      <ButtonGroup />   {/* Acciones */}
    </>
  );
};

export default AddToCartInfo;
