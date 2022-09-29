// ! Este componente no está siendo utilizado
import React from "react";

/**
 * Types de Total para ser manejado el totalizers
 */

type Total = {
  id: string
  name: string
  value: number
};

/**
 * Este componente me sirve para saber la suma total de mis productos en carrito
 * @param totalizers me trae info de los productos del carrito
 * @returns total de los productos
 */

const Totalizers = (totalizers: Total) => {
  const {id, name, value} = totalizers;
  console.log("Mis totales son iguales a:", id, name, value);

  return <div>Totalizers</div>
};

export default Totalizers;
