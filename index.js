const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router1 = jsonServer.router("db.json");
const router2 = jsonServer.router("intents.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use("/data", router1);
server.use("/intent", router2);

server.listen(port);