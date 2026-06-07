const counter = document.querySelector(".div-count");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

let sum=0;
function countNum(){
    sum++;
    counter.innerHTML = sum;
}
count.addEventListener("click",function (){
    countNum();
});
reset.addEventListener("click",function (){
sum=0;
counter.innerHTML=sum;
});