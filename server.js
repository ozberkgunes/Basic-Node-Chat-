var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root: __dirname});
});

io.on('connection',function(socket){
    console.log('User Connect');
    socket.on('chat message',function(msg){
        io.emit('chat message',msg);
    });
    socket.on('disconnect',function(){
        console.log('User Disconnect');
    });
});

const port = 3000;
server.listen(port,()=>{
    console.log(port+" listen");
});
