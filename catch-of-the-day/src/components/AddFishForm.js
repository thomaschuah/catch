import React from "react";
class AddFishForm extends React.Component {

	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	constructor(props){
		super(props);
	}
	createFish =(event) => {
		event.preventDefault();
		

		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		};

		this.props.addFish(fish);
		console.log(event.currentTarget);
		debugger;
		event.currentTarget.reset();

	};
	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" />
				<select name="status" ref={this.statusRef} type="text" placeholder="Status" >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" ></textarea>
				<input name="image" ref={this.imageRef} type="text" placeholder="Image" />
				<button name="submit">+ Add Fish</button>
			</form>
		);
	}
}
export default AddFishForm;