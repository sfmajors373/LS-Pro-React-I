//make a button for the navbar
import React, { Component } from 'react';
import './NavBarButton.css';

export default class NavBarButton extends Component {
	render() {
		return (
			<button>
			  { this.props.text }
			</button>
		);
	}
}