import React, { useEffect } from 'react';

function HomePage() {
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
