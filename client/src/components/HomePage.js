import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Container,
	Grid,
	Card,
	Typography,
	makeStyles
} from '@material-ui/core';

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

function HomePage() {
	const classes = useStyles();
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/restricted/users')
			.then(res => {
                console.log(res);
                setUsers(res.data)
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Container className={classes.root}>
				{users.map(e => (
					<Grid item xs={12} sm={6} md={3} >
						<Card>
							<Typography>{e.username}</Typography>
							<Typography>{e.department}</Typography>
						</Card>
					</Grid>
				))}
			</Container>
		</div>
	);
}

export default HomePage;
