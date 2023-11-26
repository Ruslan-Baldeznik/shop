import React from 'react';
import "./CartItem.scss"
// import {items} from '../../helpers/items';

const CartItem = (props) => {
	const items = props.items;
	const cartItems = props.cartItems;
	// const item = props.cartItems[props.identificator - 1];
	const item = props.cartItems.find(cartItem=>cartItem.identificator === props.identificator)
	const fetchedItem = items.find(fet=>fet.identificator === props.identificator)
	const setCartItems = props.setCartItems;

	const handleDecrease = () =>{
		if(item.counted === 1)
			handleDelete();
		else {
			setCartItems(cartItems.map(cartItem=>{
			if((cartItem.identificator === props.identificator) && (cartItem.counted > 0))
			{
				cartItem.counted--;
				console.log(cartItem)
			}
			return cartItem
		}))}
	}

	const handleIncrease = () =>{
		setCartItems(cartItems.map(cartItem=>{
			if((cartItem.identificator === props.identificator) && (cartItem.counted < fetchedItem.inStock))
			{
				cartItem.counted++;
				console.log(cartItem)
			}
			return cartItem
		}))
	}

	const handleDelete = () =>{
		setCartItems(cartItems.filter(cartItem=>cartItem.identificator !== props.identificator))
	}
	return (
		<div className='cartItem'>
			<div className="cartItem__container">
				<div className="cartItem__name">{item.name}</div>
				<div className="cartItem__image"><img src={fetchedItem.image} alt="" /></div>
				<div className="cartItem__change">
					<button className="cartItem__decrease" onClick={handleDecrease}>-</button>
					<div className="cartItem__count">{item.counted}</div>
					<button className="cartItem__increase" onClick={handleIncrease}>+</button>
				</div>
				<button className="cartItem__delete" onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default CartItem;