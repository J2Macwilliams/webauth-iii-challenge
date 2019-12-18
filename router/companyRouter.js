const router = require('express').Router();
const bcrypt = require('bcryptjs');

// Pull in middleware
const validatePost = require('');
const restricted = require('');

//Pull in knex helper models
const  userDb = require('');

// Register--------------------------------------------
router.post('/register', validatePost, (req, res) => {
	let user = req.body;

	const hash = bcrypt.hashSync(user.password, 8);

	user.password = hash;

	userDb
		.add(user)
		.then(stored => {
			res.status(200).json(stored);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// Login-------------------------------------------------
router.post('/login', validatePost, (req, res) => {
	let { username, password } = req.body;

	userDb
		.getBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				
				res.status(200).json({ message: "Logged in"});
				
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

// Logout---------------------------------------------------
router.get('/logout', (req, res) => {

});

// Global GET with restricted middleware------------------------------
router.get('/restricted/users', restricted, (req, res) => {
	userDb
		.get()
		.then(found => {
			res.status(200).json(found);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});


module.exports = router;