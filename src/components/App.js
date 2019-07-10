import React, { Component } from 'react'
import Notes from './Notes';
import Products from './Products';


export default class App extends Component {

    state = {
        products: [],
        filtered_products: [],
        next_page: null,
        filter:'',
        extension: '/api/products/1',
        avg:null
    }

    componentDidMount() {
        this.fetchData(this.state.extension);
    }


    // Grab the data from api, using variable extension 
    // Needs a cors fix
    // Also need to reset filtered products each call.
    fetchData = (extension) => {
        const cors_fix = 'https://cors-anywhere.herokuapp.com/';
        const url_base = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';
        
        let url = `${cors_fix}${url_base}${extension}`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                products: [...this.state.products, ...data["objects"]],
                filtered_products: [...this.state.products, ...data["objects"]],
                next_page: data["next"]
            })

            this.filterProducts()
            this.setState({current_extension: extension})
        })
        .catch(error => console.log(`API CALL ERROR: ${error}`))
    }


    // Go to next page, generate data for next page
    nextPage = () => {
        let extension = this.state.next_page
        this.fetchData(extension)
    }


    // Store the filter from onChange event
    storeFilter = (e) => {
        let filter = e.target.value.toLowerCase();
        this.setState({filter: filter})
        this.filterProducts()
    }


    // Filter the products in state
    filterProducts = () => {

        if (this.state.filter.length > 0) {
            let filtered = this.state.products.filter(item=> item["category"].toLowerCase().includes(this.state.filter))
            this.setState({filtered_products: filtered})
        } else {
            this.setState({filtered_products: [...this.state.products]})
        }

        let avg = this.calculateWeights();
        this.setState({avg})
        
        
    }

    // Calculates the average cubic weights of the filtered products within state
    // returns average
    calculateWeights = () => {

        let copy = this.state.filtered_products
        let length = copy.length
        let sum = 0
        let error_count = 0

        for (let i=0; i<copy.length; i++) {
            if (Object.entries(copy[i].size).length > 0 ) {
                let cubic_weight = (
                      (copy[i].size.height / 100)
                    * (copy[i].size.length / 100)
                    * (copy[i].size.width / 100)
                    * 250 * 1000)
                sum += cubic_weight
            } else {
                error_count += 1
            }
        }

        return sum / (length - error_count)
    }

    render() {
        return (
            <section className="section">
                <section className="container">
                <Notes/>

                <h3>Filter By</h3>
                <p>Filters by product category on the current page. Case insensitive. When empty, all results are returned.</p>
                <input placeholder="Enter a product category" type="text" onChange={this.storeFilter}/>

                <Products products={this.state.filtered_products} average={this.state.avg}/>
                { 
                    this.state.next_page ? 
                    <button style={{marginTop: '1rem'}} className="btn-large waves-effect waves-light indigo" onClick={this.nextPage}>Load More</button> :
                    <button style={{marginTop: '1rem'}} className="btn-large waves-effect waves-light indigod">No more products </button> 
                }
                </section>
            </section>
        )
    }
}
