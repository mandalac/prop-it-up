import React, {Component} from 'react';

class PersonCard extends Component{
	render(){
		return(
			<>
				<h1>{this.props.lastName},{this.props.firstName}</h1>
				<p>Age: {this.props.age}</p>
				<p>Hair Color: {this.props.hairColor}</p>
				
			</>
		)
	}
}
export default PersonCard;