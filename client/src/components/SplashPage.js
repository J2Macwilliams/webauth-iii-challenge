import React, { useState } from 'react';
import axios from 'axios';

import NavBar from './NavBar';

import {
	TextField,
	Typography,
	Paper,
	Button,
	makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		display: 'flex',
        justifyContent: 'center',
        width: '29%',
        padding: '1%',
        margin: '2%',
        boxShadow: '0 0 5px 3px #ee4540',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: 'white',
		borderRadius: 5
	},
	input: {
		background: 'white',
		borderRadius: 5
	},
	button: {
        background: '#801336',
        color: '#ee4540'
    },
    container: {
        background: '#2d132c',
        height: '100vh',
        width: '100% ',
        border: '2px solid #ee4540'
    }
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
		axios
			.post('http://localhost:5000/api/register', user)
			.then(res => {
				console.log('Post', res);
			})
			.catch(err => {
				console.log(err);
			});
		setUser({ username: '', password: '' , department: ''});
	};

	return (
		<div>
			<NavBar />
			<div className={classes.container} >
				<Paper className={classes.paper}>
					<form
						onSubmit={handleSubmit}
						className={classes.form}
						xs={12}
						sm={6}
						md={3}
					>
						<Typography variant='h4' >Register</Typography>
						<TextField
							id='outlined-basic'
							label='username'
							name='username'
							margin='normal'
							
							value={user.username}
							onChange={handleChanges}
							className={classes.input}
							required
						/>
						<TextField
							id='outlined-basic'
							label='password'
							name='password'
							margin='normal'
							
							value={user.password}
							onChange={handleChanges}
							className={classes.input}
							required
						/>
						<TextField
							id='outlined-basic'
							label='department'
							name='department'
							margin='normal'
							
							value={user.department}
							onChange={handleChanges}
							className={classes.input}
							required
						/>
						<Button type='submit' className={classes.button}>
							submit
						</Button>
					</form>
				</Paper>
			</div>
		</div>
	);
}

export default SplashPage;
