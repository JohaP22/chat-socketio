var socket = io.connect('http://localhost:7777',{forceNew:true})
socket.on('message',function(data){
    renderMessages(data)
})
function renderMessages(data){
    var messList = data.map((message,index)=>{
        return `<div><strong>${message.nickname}</strong> : ${message.message}</div>`
    }).join(' ')
    document.querySelector('#mesagge').innerHTML = messList
}
function addMessage(e){
    var messages={
        nickname:document.querySelector('[name="nickname"]').value,
        message:document.querySelector('[name="message"]').value
    };
    document.querySelector('[name="nickname"]').style.display = 'none';
    socket.emit('add-messages',messages);
    return false;
}