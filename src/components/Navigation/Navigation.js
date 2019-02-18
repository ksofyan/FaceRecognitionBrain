import React from 'react';
import Logo from '../Logo/Logo'

const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn){
			return (
				<div className="navbar">
				<Logo />
						<div className='signout'>
							<p 
							onClick = {()=> onRouteChange('signout')}
							className = 'f3 link dim white underline pa3 pointer'> Sign Out </p>
						</div>
			    </div>

			);
			
		} else {
			return(
				<nav style ={{display:'flex', justifyContent:'flex-end'}}>
					<p 
					onClick = {()=> onRouteChange('signin')}
					className = 'f3 link dim white underline pa3 pointer'> Sign in </p>
					<p 
					onClick = {()=> onRouteChange('register')}
					className = 'f3 link dim white underline pa3 pointer'> Register</p>
				</nav>
		);
	}
		
}

export default Navigation;

// <nav style ={{display:'flex', justifyContent:'flex-end'}}>
// 					<p 
// 					onClick = {()=> onRouteChange('signout')}
// 					className = 'f3 link dim white underline pa3 pointer'> Sign Out </p>
// 			    </nav>

// <nav style ={{display:'flex', justifyContent:'flex-end'}}>
// 					<p 
// 					onClick = {()=> onRouteChange('signin')}
// 					className = 'f3 link dim white underline pa3 pointer'> Sign in </p>
// 					<p 
// 					onClick = {()=> onRouteChange('register')}
// 					className = 'f3 link dim white underline pa3 pointer'> Register</p>
// 				</nav>