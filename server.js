const app = require('express');
const server = app();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.send("Answer from the server created whit express, by rdm dev"));
server.listen(port, () => console.log(`Server running on http://127.0.0.1:${port}`));