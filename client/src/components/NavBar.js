import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
	return;
	<div>
		<NavLink exact to='/' activeClassName='activeNavButton' className='navLink'>
			Home
		</NavLink>
		<NavLink
			to='/home-page'
			activeClassName='activeNavButton'
			className='navLink'
		>
			Users
		</NavLink>
	</div>;
}

export default NavBar;
