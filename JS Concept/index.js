// document.getElementById("p1").innerText="Zakir Hossen";


// IT's using a prompt box;
// let username;
// username=window.prompt("Enter your user name?");
// console.log(username);


// take input using html form.
// let username;
// document.getElementById('mysubmit').onclick=function(){
//     username=document.getElementById('mytext').value;
//     document.getElementById('p1').innerText=`Hello this is ${username}`;
// }

// type converstion we can use 
// Number(),String(),Boolean();


//Increase and decreaseing the value a number.
// const increasebtn=document.getElementById("increase");
// const decreasebtn=document.getElementById("decrease");
// const resetbtn=document.getElementById("reset");
// const number=document.getElementById("counterlabel");
// let count=0;
// increasebtn.onclick=()=>{
//     count+=1;
//     number.innerText=count;
// }
// decreasebtn.onclick=()=>{
//     count-=1;
//     number.innerText=count;
// }
// resetbtn.onclick=()=>{
//     count=0;
//     number.innerText=count;
// }

// CLOSER


// function outerfunction(){
//     let num=17;
//     function innerfuntion(){
//         console.log(num);

//     }
//     num++;
//     innerfuntion();

// }
// var x=outerfunction();
// console.log(x);

// let roundTo = (n, step) => {
//     let remainder = n % step;
//     return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(12,3));



// Call Back function
// sum(display,2,3);
// function sum(callback, a, b){
//     let result = a+b;
//     console.log("It's a Call back function who call first");
//     callback(result);
// }
// function display(result){
//     console.log("It's a call function who call later");
//     console.log(result);
// }
let arr=[2,3,4,5,6,8];
console.log("Using forEach call function")
const squer = x =>{
    console.log(Math.pow(x, 2));
}
arr.forEach(squer);



const quib = e =>{
    return Math.pow(e,3);
}
console.log("Using Map callback function");
const result=arr.map(quib);
console.log(result);

const str=["student","jakir","Hossen"];
 const upper = x =>{
    return x.toUpperCase();
 }
const res=str.map(upper);
console.log(res);




const date=['2023-2-23','2024-2-30','2026-3-20'];
function formatedates(element){
    const parts=element.split("-");
    return `${parts[1]}/ ${parts[1]} /${parts[0]}`;
}
const dates=date.map(formatedates);
console.log(dates)

let string =JSON.stringify({human:true,name:["Jakir","Hossen","Showrov vai","Ruhul Amin","Eva Islam","SiFul islam"]});
console.log(JSON.parse(string).name[0]);



const person={
    name:"Jakir",
    age:23,
    display:function(){
        console.log(`Hi I am ${name}`);
    }
}
person.display();