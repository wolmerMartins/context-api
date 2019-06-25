import React from 'react';

import Cars from '../Cars';

const ProductList = props => (
    <div className="product-list">
        <h2>Product list:</h2>

        <Cars />
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div>
)

export default ProductList;