function getvalueId(Id_name){
    const preId=document.getElementById(Id_name);
    const preId_value=preId.value;
    const preId_valuenumber=parseFloat(preId_value);
    preId.value="";
    return preId_valuenumber;

}
function getinnerTextId(Id_name2){
    const preId2=document.getElementById(Id_name2);
    const preId_innerText=preId2.innerText;
    const preId_innerTextnumber=parseFloat(preId_innerText);
    preId2.value="";
    return preId_innerTextnumber;
}
function movevalue(shiftIdname,movevalue){
    const shiftId=document.getElementById(shiftIdname);
    shiftId.innerText=movevalue;
   

}