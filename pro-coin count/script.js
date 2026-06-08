const result=document.getElementById("result");
const headsbox=document.getElementById("heads");
const tailsbox=document.getElementById("tails");
const reset=document.getElementById("reset");
const guess=document.getElementById("Guess");

let headscount=0;
let tailscount=0;
 
function countTails(){
    tailscount++;
    tailsbox.innerHTML=tailscount;
    result.innerHTML="Tails"
    result.style.backgroundColor="green";

}
function countHeads(){
    headscount++;
    headsbox.innerHTML=headscount;
     result.innerHTML="Heads"
      result.style.backgroundColor="blue";
}
guess.addEventListener("click",function(){
    let num = Math.floor(Math.random() * 2) + 1;
    if(num==1){
        countTails();
    }else{
        countHeads();
    }
});
reset.addEventListener("click",function(){
    tailscount=0;
    headscount=0;
    headsbox.innerHTML=headscount;
    tailsbox.innerHTML=tailscount;
    result.innerHTML="Toss the coin";
    result.style.backgroundColor="white";
})
