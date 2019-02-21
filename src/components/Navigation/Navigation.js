import React from 'react';
import Logo from '../Logo/Logo'

const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn){
			return (
				<div className="cf">
						<div className='fl w-50'>
							<Logo />
						</div>
						<nav style ={{display:'flex', justifyContent:'flex-end'}}>
							<p
							style= {{textAlign:'right'}}
							onClick = {()=> onRouteChange('signout')}
							className = 'fl w-50 f3 link dim white underline pa3 pointer'> Sign Out
							</p>
						</nav>
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
