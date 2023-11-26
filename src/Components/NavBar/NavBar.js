import React from 'react';
import "./NavBar.scss"
import NavBarButton from './NavBarButton/NavBarButton';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className="nav-bar_container">
				<div className="nav-bar">
					<NavBarButton to="/"><div className="">Home</div></NavBarButton>
					<NavBarButton to="/about"><div className="">About</div></NavBarButton>
				</div>
				<NavBarButton to="/cart" className="shopping-cart">Cart</NavBarButton>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
