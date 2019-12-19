import React from 'react';
import { Route } from 'react-router-dom';

import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={SplashPage} />
			<Route
				exact
				path='/home-page'
				render={props => <HomePage {...props} />}
			/>
		</div>
	);
}

export default App;
