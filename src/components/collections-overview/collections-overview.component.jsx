import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionOverviewCollection } from "./collection-overview.styles";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => 
(
  <CollectionOverviewCollection>
    {collections.map(({ id, ...otherCollectionprops }) => (
      <CollectionPreview key={id} {...otherCollectionprops} />
    ))}
  </CollectionOverviewCollection>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
