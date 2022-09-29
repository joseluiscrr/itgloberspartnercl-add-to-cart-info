import React from "react";
import { useProduct } from "vtex.product-context";  // * Que es responsable de proporcionar datos sobre un determinado producto
import { useOrderForm } from "vtex.order-manager/OrderForm"; // * Almacena mucha información contextual sobre el pedido que es importante para el procesamiento del pedido: artículos del pedido, datos personales del cliente, dirección de entrega, información de envío, etc
import ButtonGroup from "./ButtonGroup"; // * Llamado al componente de botones de redirección
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css";


/**
 * Este componente sirve para visualizar, y ser utilizado en un modal layout, las compras que llevas hasta el momento
 * cada vez que agregas un producto a tu carrito
 * @returns lista de productos que han sido agregados al carrito y botones de redirección
 */

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(styles.container, blockClass); // * Esta función lo que hace es devolverme un clase al estilo vtex "itgloberspartnercl-add-to-cart-info-0-x-container"
  const container__item = generateBlockClass(styles.container__item, blockClass); // * Generador de clases

  const productInfo = useProduct(); // ! Llamado para obtener información de un producto (No está siendo utilizado)
  if (false) console.log("Este producto tiene esta info", productInfo); // ! Simplemente para que no bote error en TypeScript

  const { orderForm: { items, totalizers } } = useOrderForm(); // * Llamado a la API de vtex que nos entrega un objeto, del cual sacamos items: productos y totalizers: total de lo que valen los productos

  return (
    <div className={classes}>
      {
        items.map((item: any, index: number) => { // *El map me devuelve cada producto con su info
          return (
            <div key={index} className={container__item}>
              <div className={`${styles.image__container}`}>
                <img src={item.imageUrls.at1x} className={`${styles.image}`} />
              </div>
              <div className={`${styles.info__container}`}>
                <p className={`${styles.info__name}`}>{item.name}</p>
                {/* <p className={`${styles.info__id}`}>{item.id}</p> */}
                <p className={`${styles.info__price}`}>$ {item.price / 100}</p>
                <p className={`${styles.info__quantity}`}>Cantidad: {item.quantity}</p>
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
      <ButtonGroup />
    </div>
  );
};

export default AddToCartInfo;
