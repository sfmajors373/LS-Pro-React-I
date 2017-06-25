//creation of NavBar
import React, { Component } from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className="navbar">
			  <NavBarButton text={'One'} />
			  <NavBarButton text={'Two'} />
			  <NavBarButton text={'Three'} />
			</div>
		);		
	}
}