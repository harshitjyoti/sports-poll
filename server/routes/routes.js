const pollRoutes = require("./polls");

const appRouter = (app, fs) => {
    app.get("/", (req, res) => {
        console.log('Welcome')
    });
    pollRoutes(app, fs);
};

module.exports = appRouter;