const RANKING_PATH = "./ranking.json";

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("../client"));

app.get("/get-ranking", (req, res) => {
    readFile(RANKING_PATH)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
            res.send("Fail to load ranking");
        })
});

app.post("/post-score", (req, res) => {
    const clientData = req.body;
    readFile(RANKING_PATH)
        .then(function (data) {
            data.push(clientData);
            writeFile(RANKING_PATH, data)
                .then(function (data) {
                    res.send("Score Saved");
                })
                .catch(function (error) {
                    console.log(error);
                    res.send("Fail to write ranking file");
                })
        })
        .catch(function (error) {
            console.log(error);
            res.send("Fail to save score");
        })
});

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function writeFile(filePath, data) {
    const dataToWrite = JSON.stringify(data);
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, dataToWrite, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve("File Writed")
            }
        });
    })
}

app.listen(8080, () => {
    console.log("Server available");
});