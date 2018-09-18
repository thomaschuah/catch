import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();
	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this);
	}
	componentDidMount(){
		// "this" is defined
		// because this method is part of the React.Component class
	}
	// goToStore(event){
	// 	// any custom functions aren't going to know what "this" is
	// 	event.preventDefault();
	// 	console.log(this.myInput);
	// }

	// event handler is defined as a property
	// and properties are bound to the instance rather than nothing at all
	goToStore = (event) => {
		event.preventDefault();
		
		const storeName = this.myInput.value.value;
		this.props.history.push(`/store/${storeName}`);
	}
	
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
