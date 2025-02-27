const element=document.getElementById("dessert");
const firstchild=element.firstElementChild;
firstchild.style.backgroundColor="yellow";
document.getElementById("vegetable").append(element);




/*This is all about Dom*/
let fif=Promise.resolve(50000);
fif.then(value => console.log(`Got ${value}`));
const mybutton= document.getElementById("mybutton");
// mybutton.classList.add("enabled");
// mybutton.classList.remove('enabled');
mybutton.addEventListener('mouseover',event=>{
    event.target.classList.toggle("hover");
});
mybutton.addEventListener('mouseout',event=>{
    event.target.classList.toggle("hover");
});