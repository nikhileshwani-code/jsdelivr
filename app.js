document.getElementById("head").innerHTML='Hello world! Lets add';
function add(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=parseInt(a)+parseInt(b);
    document.getElementById("result").innerHTML=c;
}
