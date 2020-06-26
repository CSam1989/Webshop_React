import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackGroundImageContainer,
  ContentContainer,
  MenuItemCompontent,
  SubTitleContainer,
  TitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemCompontent
    className={`${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackGroundImageContainer
      className="background-image"
      backgroundImage={imageUrl}
    />
    <ContentContainer className="content">
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubTitleContainer>SHOP NOW</SubTitleContainer>
    </ContentContainer>
  </MenuItemCompontent>
);

export default withRouter(MenuItem);
