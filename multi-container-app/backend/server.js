const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT ?? 8000;
const { MONGO_DB_UNAME, MONGO_DB_PASS } = process.env;
const MONGO_DB_URI = `mongodb://${MONGO_DB_UNAME}:${MONGO_DB_PASS}@mongodb:27017/todos?authSource=admin`;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(MONGO_DB_URI);
