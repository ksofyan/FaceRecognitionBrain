import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {

	return (

		<div className = 'ma4 mt4 w-50 p4'>
			<Tilt className="Tilt br6 shadow-6" options={{ max : 55 }} style={{height: 150, width: 150}} >
	 			<div className="Tilt-inner pa3"> 
	 				<img style={{paddingTop: '10px'}} alt='logo' src={brain}/> 
	 			</div>
				</Tilt>
		</div>

		);
}

export default Logo;