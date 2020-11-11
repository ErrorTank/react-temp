require("dotenv").config({
    path: process.env.NODE_ENV === "production" ? "./env/prod.env" : "./env/dev.env",
});
const http = require("http");
const createExpressServer = require("./express");
const app = createExpressServer({ useCors: true });
const createRoutes = require("./routes");
const errorHandlingMiddleware = require("./lib/error/error-handlers");

const startServer = () => new Promise((resolve) => {

    const port = process.env.PORT || 4000;
    const server = http.createServer(app);
    app.use("/", createRoutes());
    app.use(errorHandlingMiddleware);
    server.listen(port, () => {
        console.log(`Server running on port: ${port}`);
        resolve()
    });
})

startServer()
    .catch(err => console.log(err));

