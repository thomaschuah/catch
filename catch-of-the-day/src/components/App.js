import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {

	// setting state as a property vs. this.setState() in the constructor
	// Wes prefers this way
	state = {
		fishes: {},
		order: {}
	};
	constructor(props){
		super(props);
	}

	addFish = (fish) => {
		// an object spread
		debugger;
		const fishes = {...this.state.fishes};

		// date.now = seconds since 1970
		fishes[`fish${Date.now()}`] = fish;

		this.setState({
			fishes: fishes
		});
	}
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" age={100} />
					<Order />
					<Inventory addFish={this.addFish} />
				</div>

			</div>
		);
	}
}
export default App;