const router = require('express').Router();

const Users = require('./user-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    let departments = req.decodedToken.departments;
    Users.findBy(departments)
    .then(users => {
        res.status(200).json({ loggedInUser: req.decodedToken.username, users });
    })
    .catch(err => res.send(err));
});

module.exports = router;