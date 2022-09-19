import React from "react";

type Total = {
  id: string
  name: string
  value: number
};

const Totalizers = (totalizers: Total) => {
  const {id, name, value} = totalizers;
  console.log("Mis totales son iguales a:", id, name, value);

  return <div>Totalizers</div>
};

export default Totalizers;
