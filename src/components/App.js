import React, { Component } from 'react'
import Notes from './Notes';
import Products from './Products';


export default class App extends Component {

    state = {
        products: [],
        next_page: null
        
    }

    componentDidMount() {
        const url_extension = '/api/products/1';
        const cors_fix = 'https://cors-anywhere.herokuapp.com/';
        const url_base = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';
        
        let url = `${cors_fix}${url_base}${url_extension}`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                products: data["objects"],
                next_page: data["next"]
            })
        })
        .catch(error => console.log(`There was an error with the api call ${error}`))
    
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
