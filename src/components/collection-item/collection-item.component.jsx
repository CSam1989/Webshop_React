import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart-actions";
import {
  CollectionFooterContainer,
  CollectionItemContainer,
  CustomButtonContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButtonContainer
        className="custom-button"
        onClick={() => addItem(item)}
        inverted
      >
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
