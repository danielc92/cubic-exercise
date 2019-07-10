import React, { Component } from 'react'

export default class Notes extends Component {
    render() {
        return (
            <div>
                <h3>Notes</h3>
                <strong>Instructions</strong>
                <ul className="collection">
                    <li className="collection-item">Assume dimensions are in centimetres</li>
                    <li className="collection-item">Cubic meter multiplied by 250 factor gives <strong>cubic weight</strong></li>
                </ul>
                <strong>My Assumptions</strong>
                <ul className="collection">
                    <li className="collection-item">Measurements need to be converted into meters (/100)</li>
                    <li className="collection-item">Number of pages is variable</li>
                    <li className="collection-item">A product may not have any dimensions, dimensions can be empty or null</li>
                    <li className="collection-item">A page may not have a next page, pages can be null</li>
                    <li className="collection-item">The api validates/serializes before sending the response, therefore numbers cannot be strings</li>
                </ul>
            </div>
        )
    }
}
