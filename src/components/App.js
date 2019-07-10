import React, { Component } from 'react'

export default class App extends Component {

    state = {
        products: []
    }

    componentDidMount = () => {
        let base_url = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/'
        let extension = 'products/1'
    
    }

    render() {
        return (
            <div>
                <Notes/>
                <Products products={this.state.products}/>
            </div>
        )
    }
}
