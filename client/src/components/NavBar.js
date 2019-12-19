import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar' >
            <NavLink
				exact
				to='/'
				activeClassName='activeNavButton'
				className='navLink'
			>
				Sign In
			</NavLink>
			<NavLink
				to='/home-page'
				activeClassName='activeNavButton'
				className='navLink'
			>
				Users
			</NavLink>
        </div>
    )
}

export default NavBar
