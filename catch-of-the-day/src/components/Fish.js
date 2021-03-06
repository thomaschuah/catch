import React from "react";
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.key);
    }
  render() {
  	// const image = this.props.details.image;
	// const name = this.props.details.name;

	// es6 destructuring - set multiple variables at once
	const { image, name, price, desc, status } = this.props.details;
	const isAvailable = status === 'available';
    return (
    	

    	<li className="menu-fish">

    		<img src={image} alt={name}/>
    		<h3 className="fish-name">
    			{name}
    			<span className="price">{formatPrice(price)}</span>
    		</h3>
    		<p>{desc}</p>
    		<button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold out!'}</button>
    	
    	</li>);
  }
}

export default Fish;
