// function getvalueId(Id_name){
//     const preId=document.getElementById(Id_name);
//     const preId_value=preId.value;
//     const preId_valuenumber=parseFloat(preId_value);
//     preId.value="";
//     return preId_valuenumber;

// }
// function getinnerTextId(Id_name2){
//     const preId2=document.getElementById(Id_name2);
//     const preId_innerText=preId2.innerText;
//     const preId_innerTextnumber=parseFloat(preId_innerText);

//     return preId_innerTextnumber;
// }
// function movevalue(shiftIdname,movevalue){
//     const shiftId=document.getElementById(shiftIdname);
//     shiftId.innerText=movevalue;
   

// }
document.getElementById("depo_btn").addEventListener('click',function(){
    //deposit
    const new_depo=getvalueId("depo_id");
    const pre_depo=getinnerTextId("pre_depo");
    const update_depo=new_depo+pre_depo;
    const move_depo=movevalue("pre_depo",update_depo);
    //balance
    const pre_balance=getinnerTextId("pre_balance");
    console.log( pre_balance);
    
    const upadate_balance=update_depo+pre_balance;
  
   
    const total_balance=movevalue("pre_balance",upadate_balance);
    

});



