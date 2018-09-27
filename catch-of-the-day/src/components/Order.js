import React from "react";
import {formatPrice} from '../helpers';

class Order extends React.Component {

	renderOrder = (key) => {
		const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status==='available';
    if (!isAvailable){
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
    }
  		
		return (
      <li key={key}>
				{count} lbs {fish.name}
				{formatPrice(count * fish.price)}
			</li>
      );
    
	};

  render() {
  	const orderIds = Object.keys(this.props.order);

  	// like for-loop, but nothing returned. 
  	// just looping through each variable. 
  	// reduce can return a talley, etc.

  	// here we are doing a talley (prevTotal holds the running total)
  	// last parameter tells us that starting val is 0
  	const total = orderIds.reduce((prevTotal, key) => {
  		const fish = this.props.fishes[key];
  		const count = this.props.order[key];

  		const isAvailable = fish && fish.status==='available';
  		if (isAvailable) {
  			return prevTotal + count*fish.price;
  		}
  		return prevTotal;
  	}, 0);

    return (
    	
    	<div className="order-wrap">
    		<h2>Order</h2>
    		
    		<ul>
    			{orderIds.map(this.renderOrder)}
    		</ul>
    		<div className="total">
    			<strong>{formatPrice(total)}</strong>
    		</div>
    	</div>);
  }
}

export default Order;
