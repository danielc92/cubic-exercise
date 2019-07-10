import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h3>Products</h3>
                <p>Found <span className="chip orange white-text">{this.props.products.length} products</span>. Average weight for these products <span className="chip pink white-text">{this.props.average} grams</p>
                <p></span> </p>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Weight</th>
                            <th>Width</th>
                            <th>Length</th>
                            <th>Height</th>
                            <th>Cubic weight (grams)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((item, index) => {
                        return ( <ProductItem item={item} key={index}/>)
                    })}
                    </tbody>
                    </table>              
                    </div>
        )
    }
}
