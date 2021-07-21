var express = require('express');
var app = express();
var server= require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));
app.get('/index',function(req,res){
    res.status(200).send('GRACIAS DIOS LO LOGRAMOS')
})
var messages = [{
    id:1,
    message:'Bienvenido al Chat Interno',
    nickname:'LAN'
}]
io.on('connection',function(socket){
    console.log('Conexion detectada')
    console.log('Conexion detectada con la IP: '+socket.handshake.address)
    socket.emit('message',messages)
    socket.on('add-messages',function(data){
        messages.push(data);
        io.sockets.emit('message',messages)
    })
})
server.listen(7777,function(){
    console.log('escuchando GRACIAS A DIOS')
})