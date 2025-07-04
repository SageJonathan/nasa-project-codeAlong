const http = require("http");
const app = require("./app").default;

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Lisening on PORT: ${PORT} `);
});
