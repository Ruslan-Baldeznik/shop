import React from 'react';
import "./SocialMedia.scss"
import instagram_icon from "../../../images/Instagram_icon.png.webp"
import telegram_icon from "../../../images/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.webp"
import facebook_logo from "../../../images/Facebook_Logo_(2019).png"

const SocialMedia = (props) => {
	console.log(props)
	const socialMedias = {
		instagram: instagram_icon,
		facebook: facebook_logo,
		telegram: telegram_icon
	}
	return (
		<a href={props.link}className='social-net'>
			<img src={socialMedias[props.name]} alt={props.name} />
		</a>
	);
};

export default SocialMedia;