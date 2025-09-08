import express from "express";
import cors from "cors";

const PORT = 8000;
const HOST = "127.0.0.1"

// szerver inditasa
const server = express();
// cors problemakra - csak fejlesztesi idoben: minden kerest engedelyezunk
server.use(cors());
server.use(express.json());


server.listen(PORT, () =>console.log(`server is running at http://${HOST}:${PORT}`))