import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";

class App extends React.Component {
	constructor(props){
		super(props);
	};

	// setting state as a property vs. this.setState() in the constructor
	// Wes prefers this way
	state = {
		fishes: {},
		order: {}
	};
	

	addFish = (fish) => {
		// an object spread
		const fishes = {...this.state.fishes};

		// date.now = seconds since 1970
		fishes[`fish${Date.now()}`] = fish;

		this.setState({
			fishes: fishes
		});
	};
	loadSampleFishes = () => {
		this.setState({
			fishes: sampleFishes
		});
	};
	addToOrder = (key) => {

		const order = {...this.state.order};
		
		// if order.fish1 doesn't exist, then just set to 1
		//order.fish1 = order.fish1 + 1 || 1;
		order[key] = order[key] + 1 || 1;
		this.setState({order});



	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" age={100} />
					<ul className="fishes">
					{Object.keys(this.state.fishes).map(key => (
		              <Fish
		                key={key}
		                index={key}
		                details={this.state.fishes[key]}
		                addToOrder={this.addToOrder}
		              />
		            ))}
		            </ul>
					<Order fishes={this.state.fishes} order={this.state.order}  />
					<Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
				</div>

			</div>
		);
	}
}
export default App;