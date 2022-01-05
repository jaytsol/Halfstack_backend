const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

await Promise.resolve(installSwaggerOpenAPI(app));

app.listen(PORT);
