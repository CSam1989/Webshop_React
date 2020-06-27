import React from "react";

import {
  CartItemContainer,
  DetailContainer,
  ImageContainer,
  ItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <DetailContainer>{name}</DetailContainer>
      <DetailContainer>
        {quantity} x €{price}
      </DetailContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
