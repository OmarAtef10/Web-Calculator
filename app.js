function addnum(num){
    document.form.display.value=document.form.display.value+num
}

function equal(){
    var operation = document.form.display.value
    if (operation){
    document.form.display.value=eval(operation)
    }
}

function Clear(){
    document.form.display.value=null;
}