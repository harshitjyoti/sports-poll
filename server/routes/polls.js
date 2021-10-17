const pollRoutes = (app, fs) => {
    // variables
    const dataPath = "./data/polls.json";

    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = "utf8"
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = "utf8"
    ) => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get("/polls", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            // res.setHeader('Access-Control-Allow-Origin', '*')
            res.send(JSON.parse(data));
        });
    });

    // UPDATE
    app.put("/polls/:id", (req, res) => {
        readFile((data) => {
            // add the new poll
            const pollId = req.params["id"];
            poll = data.findIndex((poll) => poll.id == pollId);
            data[poll].votedFor = req.body.votedFor;
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({ status: "success" });
            });
        }, true);
    });
};

module.exports = pollRoutes;