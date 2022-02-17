let d1=document.getElementById('demo');
d1.addEventListener('mouseover',function(event){
    event.target.style.color="purple";
    setTimeout(function(){
        event.target.style.color="";
    }, 3000);
},false);

function function1(){
    document.getElementById('demo').style.color="#ff0000";
}
function function2(){
    document.getElementById('demo').style.color="#000000";
}
function func1(){
    document.getElementById('demo2').style.color="#ff0000";
}
function func2(){
    document.getElementById('demo2').style.color="#000000";
}