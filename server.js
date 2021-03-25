const app = require('express');

const server = app();

server.get('/', (req, res) => res.send("Message answered from server, created whit express, by: rdm Dev"));
server.listen(3000);
console.log("Server runnin on port 3000");