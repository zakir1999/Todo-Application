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

let roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(12,3));