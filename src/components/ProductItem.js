import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {category, title, weight, size } = this.props.item;
        let {width, length, height} = size;
        return (
            <React.Fragment>
                <tr>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{weight}</td>
                    <td>{width}</td>
                    <td>{length}</td>
                    <td>{height}</td>
                    <td>{(width/100) * (length/100) * (height/100) * 250 * 1000}</td>
                </tr>

            </React.Fragment>
        )
    }
}


/**<th>Title</th>
<th>Category</th>
<th>Weight</th>
<th>Width</th>
<th>Length</th>
<th>Height</th>
 */
