import io from "socket.io";

const port = process.env.PORT || 3000

const users = {}

io.on("connection", (socket) => {
    console.log("New Connection: " + socket.id);

    socket.on("new user", (name) => {
        users[socket.id] = name;
        socket.broadcast.emit()
    })
})