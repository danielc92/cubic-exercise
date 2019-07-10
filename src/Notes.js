import React, { Component } from 'react'

export default class Notes extends Component {
    render() {
        return (
            <div>
                <h3>Notes</h3>
                <p>Instructions</p>
                <ul>
                    <li>Assume dimensions are in centimetres</li>
                    <li>Cubic meter multiplied by 250 factor gives <strong>cubic weight</strong></li>
                </ul>
                <p>My Assumptions</p>
                <ul>
                    <li>Measurements need to be converted into meters (/100)</li>
                    <li>Number of pages is variable</li>
                    <li>A product may not have any dimensions, dimensions can be empty or null</li>
                    <li>A page may not have a next page, pages can be null</li>
                    <li>The api validates/serializes before sending the response, therefore numbers cannot be strings</li>
                </ul>
            </div>
        )
    }
}
