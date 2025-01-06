const clock = document.getElementById('clock');

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString(x)
},1000)