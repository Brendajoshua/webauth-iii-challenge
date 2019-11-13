const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/user-Router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send('Users server!');
});

module.exports = server;