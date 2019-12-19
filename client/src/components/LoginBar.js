import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

function NavBar() {
	const [user, setUser] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', user)
			.then(res => {
                console.log('Post', res);
                localStorage.setItem("user_token", res.data.token);
			})
			.catch(err => {
				console.log(err);
			});
		setUser({ username: '', password: ''});
	};

	return (
		<div className='navbar'>
			<NavLink
				to='/home-page'
				activeClassName='activeNavButton'
				className='navLink'
			>
				Users
			</NavLink>

			<form className='form' onSubmit={handleSubmit}>
				<label className='label'>username: </label>
				<input
					type='text'
					name='username'
					value={user.username}
					onChange={handleChange}
					className='input'
				/>
				<label className='label'>password: </label>
				<input
					type='text'
					name='password'
					value={user.password}
					onChange={handleChange}
					className='input'
				/>
				<button className='button'>login</button>
			</form>
		</div>
	);
}

export default NavBar;
