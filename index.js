const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // First JSON file
const router2 = jsonServer.router("db2.json"); // Second JSON file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use("/data", router); // Route for the first JSON file
server.use("/inte", router2); // Route for the second JSON file

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});