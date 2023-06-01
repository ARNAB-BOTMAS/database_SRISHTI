const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Specify the first JSON file
const router2 = jsonServer.router("intents.json"); // Specify the second JSON file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Custom router that combines data from both routers
const combinedRouter = jsonServer.router({ db: Object.assign({}, router.db, router2.db) });

server.use(jsonServer.rewriter({
  "/api/*": "/$1",
}));

server.use(combinedRouter);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});