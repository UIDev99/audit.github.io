function insert(num){
    document.form.textview.value=document.form.textview.value + num;
}

function clean(){
    document.form.textview.value="";
}

function equal(){
    var exp= document.form.textview.value;
    // document.form.textview.value=eval(exp); 


    //for undefined
    if(exp){
        document.form.textview.value=eval(exp); //eval is inbuilt fun.. evaluate of add,sub etc...
    }
}