import React from 'react';
import "./Main.scss"
import ItemCard from '../itemCard/ItemCard';
import MainContainer from '../MainContainer/MainContainer.js';
// import { items } from '../../helpers/items.js';
// import fakeFetch from '../../helpers/items.js';

const Main = (props) => {

	return (
		<MainContainer>
			<div className="main">
				{props.items.map(item=>{
					return <ItemCard items={props.items} cartItems={props.cartItems} setCartItems={props.setCartItems} key={item.identificator} identificator={item.identificator}
				/>})}
			</div>
		</MainContainer>
	);
};

export default Main;