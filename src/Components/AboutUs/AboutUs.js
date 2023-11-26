import React from 'react';
import "./AboutUs.scss"
import GoogleMapReact from 'google-map-react';
import SocialMedia from './SocialMedia/SocialMedia';
import MainContainer from "../MainContainer/MainContainer.js"

function AboutUs (){
	const defaultProps = {
		center: {
		  lat: 10.99835602,
		  lng: 77.01502627
		},
		zoom: 11
	  };
	return (
		<MainContainer>
			<div className="about-us">
				<div className='about-us__container'>
					<div className="name">SomeFarm</div>
					<div className="description">Only Fresh, Only Healthy!</div>
					<div className="map"><GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
					<div className="" lat={60} lng={30}></div>
					</GoogleMapReact></div>
					<div className="social-media">
						<SocialMedia link={""} name={"instagram"}></SocialMedia>
						<SocialMedia link={""} name={"facebook"}></SocialMedia>
						<SocialMedia link={""} name={"telegram"}></SocialMedia>
					</div>
					<div className="mobile-numbers">
						<div className="m-number">UAE: +971 XXXXXXXX</div>
						<div className="m-number">RUSSIA: +7 XXX XXXXXX</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default AboutUs;