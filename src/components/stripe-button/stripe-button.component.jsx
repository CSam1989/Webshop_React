import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { clearCart } from "../../redux/cart/cart-actions";

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GyCKcAULQjmmV2FNGCkVco4gIH1ZA7m2tqBRmiBEieLQjV9sPvJrIPL0aLrwjB25Xxv05ybkYLXVv1way86rsGV00nGRbjtdQ";

  const onToken = (token) => {
    clearCart();
    console.log(token);
    alert("Payment Successful");
    history.push("/");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="React Webshop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));
