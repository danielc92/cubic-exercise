import React, { Component } from 'react'
import Notes from './Notes';
import Products from './Products';


export default class App extends Component {

    state = {
        products: [], 
        url_extension: 'products/1',
        url_base: 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/'
    }

    componentDidMount = () => {
        fetch(`${this.url_base}${this.url_extension}`)
        .then()
        .then()
        .catch()
    
    }

    render() {
        return (
            <section className="section">
                <section className="container">
                <Notes/>
                <Products products={this.state.products}/>
                </section>
            </section>
        )
    }
}
