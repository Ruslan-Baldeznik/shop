import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBarButton.scss"

const NavBarButton = (props) => {
	return (
		<div className='button__container'>
			<Link className="button" to={props.to}>{props.children}</Link>
		</div>
	);
};

export default NavBarButton;