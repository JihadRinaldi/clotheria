import React, { Component } from "react";
import PreviewCollection from '../../components/previewcollection/PreviewCollection'
import SHOP_DATA from './ShopData.js'

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA
    };
  }
  render() {
    const {collection} = this.state;
    return (
      <div className='shop-page'>
      {
        collection.map(({id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))
      }
      </div>
    );
  }
}
