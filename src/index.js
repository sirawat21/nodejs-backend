import express from "express";

const PORT = 3030
const api = new express();

api.listen(3030, () => console.log(`API-LISTENNING: ${PORT}`))