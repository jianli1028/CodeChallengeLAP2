const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors("*"));
server.use(express.json());

const postsRoutes = require('./routes/');
server.use('/posts', postsRoutes);

server.get('/', (req, res) => res.send('All the posts'));

module.exports = server;