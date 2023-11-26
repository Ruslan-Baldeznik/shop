import React from 'react';
import "./Cart.scss"
import CartItem from '../CartItem/CartItem';
import MainContainer from '../MainContainer/MainContainer';

const Cart = (props) => {
	return (
		<MainContainer>
			<div className='cart'>
				{ props.cartItems[0] ? props.cartItems.map(item=>{
				return <CartItem items={props.items} key={item.identificator} identificator={item.identificator} cartItems={props.cartItems} setCartItems={props.setCartItems}/>
				}) : "you need to put something in your cart"}
			</div>
		</MainContainer>
	);
};

export default Cart;