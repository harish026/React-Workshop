input=document.getElementById("input1");
varr=document.getElementById("var");
function get(){
    varr.innerHTML=input.value;
    alert("value of input box is :"+input.value);
}
setTimeout(function(){
    var rand=Math.floor((Math.random()*200-1)+1);
    input.value=rand;
    varr.innerHTML=rand;

},3000)
function set(){
    setTimeout(function(){
        var rand=Math.floor((Math.random()*200-1)+1);
        input.value=rand;
        varr.innerHTML=rand;

    },3000)
}