var socket = io.connect('http://192.168.1.102:7777',{forceNew:true})

socket.on('message',function(data){
    renderMessages(data)
})
function renderMessages(data){
    var messList = data.map((message,index)=>{
        return `<div><strong>${message.nickname} </strong> dice :<br/><p> ${message.message}</p></div>`
    }).join(' ')
    document.querySelector('#mesagge').innerHTML = messList
    document.querySelector('#mesagge').scrollTop = document.querySelector('#mesagge').scrollHeight;
}
function addMessage(e){
    var messages={
        nickname: document.querySelector('[name="nickname"]').value,
        message:document.querySelector('[name="message"]').value
    };
    socket.emit('add-messages',messages);    
    document.querySelector('[name="nickname"]').style.display='none';
    return false;
}