document.getElementById("with_btn").addEventListener('click',function(){
    //deposit
    const new_with=getvalueId("with_id");
    const pre_with=getinnerTextId("pre_with");
    const update_with=new_with+pre_with;
    const move_with=movevalue("pre_with",update_with);
    //balance
    const pre_balance1=getinnerTextId("pre_balance");
    console.log( pre_balance1);
    
    const upadate_balance1=pre_balance1-update_with;
  
   
    const total_balance1=movevalue("pre_balance",upadate_balance1);
    

});