import React, { useState, useEffect } from 'react';

function HomePage() {
const [users , setUsers] = useState([])
	useEffect(() => {
		axios
			.get('')
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return <div></div>;
}

export default HomePage;
