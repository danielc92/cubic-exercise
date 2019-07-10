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

    nextPage = () => {
        let extension = this.state.next_page
        this.fetchData(extension)
    }

    storeFilter = (e) => {
        let filter = e.target.value.toLowerCase();
        this.setState({filter: filter})
        this.filterProducts()
    }

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

                <Products products={this.state.filtered_products}/>
                { 
                    this.state.next_page ? 
                    <button className="btn indigo" onClick={this.nextPage}>Load More</button> :
                    <button className="btn indigo disabled">No more products </button> 
                }
                </section>
            </section>
        )
    }
}
