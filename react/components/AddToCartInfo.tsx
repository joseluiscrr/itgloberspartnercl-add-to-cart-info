import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
// import ProductGroup from "./ProductGroup";
// import Totalizers from "./Totalizers";
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css";

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(styles.container, blockClass);
  const container__item = generateBlockClass(styles.container__item, blockClass);

  const productInfo = useProduct();
  console.log("Este producto tiene esta info", productInfo);
  
  const { orderForm: { items, totalizers } } = useOrderForm();
  console.log("Totalizers", totalizers[0]?.value);

  return (
    <div className={classes}>
      {/* <ProductGroup products={items} />  Listado de productos */}
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item}>
              <div className={`${styles.image__container}`}>
                <img src={item.imageUrls.at1x} className={`${styles.image}`} />
              </div>
              <div className={`${styles.info__container}`}>
                <p className={`${styles.info__name}`}>{item.name}</p>
                {/* <p className={`${styles.info__id}`}>{item.id}</p> */}
                <p className={`${styles.info__price}`}>$ {item.price / 100}</p>
                <p className={`${styles.info__quantity}`}>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div className={`${styles.info}`}>
        <p>{items.length} productos</p>
        <p>
          {
            totalizers[0]?.value ? 
            `Total: ${totalizers[0]?.value / 100}` :
            "Total: Por calcular"
          }
        </p>
      </div>
      {/* <Totalizers totalizers={totalizers[0]} /> */} {/* Valor total */}
      <ButtonGroup />
    </div>
  );
};

export default AddToCartInfo;
