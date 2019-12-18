import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	card: {
		background: '',
		border: '1px solid #'
	},
	type: {}
}));

function SplashPage() {
	const classes = useStyles();
	const [user, setUser] = useState({
		username: '',
		password: '',
		department: ''
	});

	const handleChanges = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
		axios
			.post('localhost:5000/api/register', user)
			.then(res => {
				console.log('Post', res);
			})
			.catch(err => {
				console.log(err);
			});
		setUser({ username: '', password: '' });
	};

	return (
		<div>
			<Paper>
				<Typography></Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						id='standard-basic'
						label='username'
						name='username'
						margin='normal'
						value={user.username}
						onChange={handleChanges}
						className={classes.input}
						required
					/>
					<TextField
						id='standard-basic'
						label='password'
						name='password'
						margin='normal'
						value={user.password}
						onChange={handleChanges}
						className={classes.input}
						required
					/>
					<TextField
						id='standard-basic'
						label='department'
						name='department'
						margin='normal'
						value={user.department}
						onChange={handleChanges}
						className={classes.input}
						required
					/>
					<Button type='submit'></Button>
				</form>
			</Paper>
		</div>
	);
}

export default SplashPage;
