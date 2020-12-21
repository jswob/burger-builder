import React, { Fragment } from "react";

const OrderSumary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
      {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the folllowing ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Fragment>
  );
};

export default OrderSumary;
