import React from 'react';
import "./ItemCard.scss"
import { useState } from 'react';
// import {items} from "../../helpers/items.js"

function ItemCard (props) {
	const items = props.items;
	const [count, setCount] = useState(0)
	const cartItem = items.find(item=> item.identificator === props.identificator)

	const handleIncrement = () =>{
		if(count < cartItem.inStock - (props.cartItems.find(item=>item.identificator === props.identificator)?.counted ?? 0))
			setCount(count + 1)
	}
	const handleDecrement = () =>{
		if(count > 0)
			setCount(count - 1)
	}
	const handlePursache = () =>{
		if(count > 0)
			{
			if(props.cartItems.find(item=>item.identificator === props.identificator))
			{
				props.setCartItems(props.cartItems.map(item=>{
					if(item.identificator === props.identificator)
						return {...item, counted: item.counted + count >= cartItem.inStock ?  cartItem.inStock : item.counted + count}
					else
						return item
				}))
			} else
			{
				props.setCartItems([...props.cartItems, {name: cartItem.name, identificator: props.identificator, counted: count}])
			}
			}
		setCount(0);
	}
	return (
		<div key={props.identificator}>
			<div className="item">
				<div className="item__name">{cartItem.name}</div>
				<div className="item__image"><img src={cartItem.image} style={{url: cartItem.image}} alt="product_image"/></div>
				<div className="item__description">{cartItem.description}</div>
				<div className="item__count">In Stock: {cartItem.inStock}</div>
				<div className="item__count">In Cart: {props.cartItems.find(item=>item.identificator === props.identificator)?.counted ?? 0}</div>
				<div className="item__order">
					<button className="decrement-count" onClick={handleDecrement}>-</button>
					<div className="count">{count}</div>
					<button className="increment-count" onClick={handleIncrement}>+</button>
				</div>
				<button className="item__add-to-card" onClick={handlePursache}>Pursache</button>
			</div>
		</div>
	);
};

export default ItemCard;