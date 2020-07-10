import React from "react";

import { withRouter } from "react-router";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleLinkContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, match }) => (
  <CollectionPreviewContainer>
    <TitleLinkContainer to={`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()}</TitleLinkContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
