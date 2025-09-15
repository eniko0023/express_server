import express from "express";
import cors from "cors";
import * as path from "node:path";
import * as url from "node:url";
import router from "./router.js";


const PORT = 8000;
const HOST = "127.0.0.1"

// szerver inditasa
const server = express();
const __dirname = import.meta.dirname;
const staticFilesDir = path.join(__dirname, "..", "dist");

// cors problemakra - csak fejlesztesi idoben: minden kerest engedelyezunk
server.use(cors());
server.use(express.json());

// statikus allomanyok (a szerver csak kuldi ezeket) kuldese a kliens fele
server.use(express.static(staticFilesDir));

// a "tobbi keres", a rest api-hoz illeszkedo keresek iranyitasa
server.use("/api", router)

server.listen(PORT, () =>console.log(`server is running at http://${HOST}:${PORT}`))