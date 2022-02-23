// input=document.getElementById("input1");
// varr=document.getElementById("var");
// function get(){
//     varr.innerHTML=input.value;
//     alert("value of input box is :"+input.value);
// }
// setTimeout(function(){
//     var rand=Math.floor((Math.random()*200-1)+1);
//     input.value=rand;
//     varr.innerHTML=rand;

// },3000)
// function set(){
//     setTimeout(function(){
//         var rand=Math.floor((Math.random()*200-1)+1);
//         input.value=rand;
//         varr.innerHTML=rand;

//     },3000)
// }
var num={};
Object.defineProperties(num,"number",
{
    get : function(){
        return value;
    },
    set : function(val){
        document.getElementById("input1").value=val;
        value=val;
        document.getElementById("var").innerHTML=val;

    }
});

setInterval(()=>{
    num.number=Math.floor(Math.random()*100);
},5000)

function changeInput(event)
{
    num.number=event.target.value;
    alert("Typed value is: "+ num.number);
}