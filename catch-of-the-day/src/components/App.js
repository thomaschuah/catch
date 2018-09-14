import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" age={100} />
					<Order />
					<Inventory/>
				</div>

			</div>
		);
	}
}
export default App;