function calculate(){
    const totalamount=document.getElementById("total-amount");
    const principalinput=document.getElementById("principal");
    const rateinput=document.getElementById("rate");
    const yearsInput=document.getElementById("years");

    let principal=Number(principalinput.value);
    let rate=Number(rateinput.value/100);
    let years=Number(yearsInput.value);
    if(principal<0){
        principal=0;
    }
    if(rate<0){
        rate=0;
    }
    if(years<0){
        years=0;
    }


    const result=principal * Math.pow((1+rate/1),1*years);
    totalamount.textContent=result.toLocaleString(undefined,{style:"currency",currency:"USD"});
}