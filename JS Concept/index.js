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
// let arr=[2,3,4,5,6,8];
// console.log("Using forEach call function")
// const squer = x =>{
//     console.log(Math.pow(x, 2));
// }
// arr.forEach(squer);



// const quib = e =>{
//     return Math.pow(e,3);
// }
// console.log("Using Map callback function");
// const result=arr.map(quib);
// console.log(result);

// const str=["student","jakir","Hossen"];
//  const upper = x =>{
//     return x.toUpperCase();
//  }
// const res=str.map(upper);
// console.log(res);




// const date=['2023-2-23','2024-2-30','2026-3-20'];
// function formatedates(element){
//     const parts=element.split("-");
//     return `${parts[1]}/ ${parts[1]} /${parts[0]}`;
// }
// const dates=date.map(formatedates);
// console.log(dates)

// let string =JSON.stringify({human:true,name:["Jakir","Hossen","Showrov vai","Ruhul Amin","Eva Islam","SiFul islam"]});
// console.log(JSON.parse(string).name[0]);



// const person={
//     name:"Jakir",
//     age:23,
//     display:function(){
//         console.log(`Hi I am ${this.name}`);
//     }
// }
// person.display();

// class person{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;

//     }
//     display(){
//         console.log(`Hi My Name is - ${this.name} and My age is ${this.age}`);
//     }

// }
// const jakir= new person("Zakir",25);
// jakir.display();




// function speak(line){
//     console.log(`The ${this.type} rabbit says ${line}`);
// }

// let whiterabbit={type:"White",speak};
// let hungryrabbit={type:"Blue",speak};
// whiterabbit.speak("Oh My fur and whishkers");
// hungryrabbit.speak("got any carrots?");


// const fun=()=>{
//     return `I am ${this.name}`;
// }
// const me ={
//     name:"Jakir",
//     fun
// }
// const you={
//     name:"Tonima",
//     fun
// }
// me.fun();
// you.fun();

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     set name(newName){
//         if(typeof newName ==="string" && newName.length>0)
//         {
//             this._name=newName;
//         }
//         else{
//             console.error("Invalid Name");
//         }
//     }
//     set age(newAge){
//         if(typeof newAge ==="number" && newAge>=0){
//             this._age=newAge;
//         }
//         else{
//             console.error("Invalid Age");
//         }
//     }
//     get name(){
//         return this._name;

//     }
//     get age(){
//         return this._age;
//     }

    
// }
// const person =new Person("Zakir ",231);
// console.log(person.name);
// console.log(person.age);


// const Person={

//     fullName:"Zakir Hossen",
//     age:25,
//     isstudent:true,
//     hobbies:["karate","jellyfising","cooking"],
//     address:{
//         street:"12-2-233",
//         city:"Dhaka",
//         country:"Bangladesh",
//     }
// }
// console.log(Person.fullName);
// console.log(Person.age);
// console.log(Person.hobbies)
// console.log(Person.address.street)
// console.log(Person.address.country)



// let numbers=[1,2,23,1,13,421,12,221];
// numbers.sort();
// console.log(numbers);


// const peopel=[{name:"Jakir",age:20,gpa:2.0},
//     {name:"Rakib",age:21,gpa:2.5},
//     {name:"Rasel",age:244,gpa:3.0},
//     {name:"sandy",age:3,gpa:3.9}
// ]
// peopel.sort((a,b)=>b.name.localeCompare(b.name));
// console.log(peopel);


// // Fisher-Yates Algorithm
// const cards=[1,2,2,421,12,121,12,12,'A','J','Q','K',232, 22,21];

// console.log("Before suffle",cards);
// shuffle(cards);
// console.log(cards);
// function shuffle(cards){
//     for(let i=cards.length-1;i>0;i--){
//         const random=Math.floor(Math.random()* (i+1));
//         [cards[i],cards[random]]=[cards[random],cards[i]];
//     }
// }

// function outer(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(`Counter is ${count}`);
//     }
//     return {inner};
// }

// const counter=outer();
// counter.inner();
// counter.inner();


// function sayhello(){
//     window.alert("Hello");
// }
// setTimeout(()=>window.alert("HELLo"),3000);


// let timeoutid;
// function statrt(){
//     timeoutid=setTimeout(()=>window.alert("Helloe"),3000);
//     console.log("Started");
// }
// function clear(){
//     clearTimeout(timeoutid);
//     console.log("Cleared");
// }
// console.time("test");
// for(let i=0;i<1000000000;i++){

// }
// console.timeEnd("test");

// let number=2321312131.10222;
// // number=number.toLocaleString("en-US");

// number=number.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
// console.log(number);

