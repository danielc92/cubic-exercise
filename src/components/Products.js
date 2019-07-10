import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h3>Products</h3>
                {this.props.products.map((item, index) => {
                    return (
                        <ProductItem item={item} index={index}/>
                    )
                })}
            </div>
        )
    }
}
