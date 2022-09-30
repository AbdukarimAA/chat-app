const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const messages = require('./routing/message')
const http = require('http')
const path = require('path')
const {Server} = require("socket.io");
const multer = require('multer')

const app = express();

const serv = http.createServer(app)

app.use(cors({
    origin: '*',
}))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images')))

app.use('/messages', messages)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

async function server() {
    try {
        await mongoose.connect(process.env.MONGO_LOCALHOST)
        serv.listen(3001, () => console.log('start'))
    } catch (e) {
        console.log()
    }
}
server();

const io = new Server(serv, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

io.on('connection', (socket) => {
    console.log(`User ${socket.id} was connected`)

    socket.on('send', (message) => {
        io.sockets.emit('receive', ({
            message
        }))
    })

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} has been disconnected`)
    })
})