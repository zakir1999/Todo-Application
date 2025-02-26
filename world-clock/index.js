function func(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const mint=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${mint}:${second}`;
    document.getElementById('time').textContent=timeString;
}
func();
setInterval(func,1000);