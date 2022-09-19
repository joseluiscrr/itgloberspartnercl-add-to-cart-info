import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
// import ProductGroup from "./ProductGroup";
// import Totalizers from "./Totalizers";
// import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css";

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(styles.container, blockClass);
  const container__item = generateBlockClass(styles.container__item, blockClass);

  const productInfo = useProduct();
  console.log("Este producto tiene esta info", productInfo);

  const { orderForm: { items, totalizers } } = useOrderForm();
  console.log("Este es la información de la órden", items, totalizers);

  return (
    <div className={classes}>
      {/* <ProductGroup products={items} />  Listado de productos */}
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>$ {item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: ${totalizers[0]?.value / 100}</p>
      </div>
      {/* <Totalizers totalizers={totalizers[0]} /> */} {/* Valor total */}
      {/* <ButtonGroup /> Acciones */}
    </div>
  );
};

export default AddToCartInfo;
