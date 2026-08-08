const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const sisc=document.getElementById("Scissor");
const mine=document.getElementById("mine");
const coms=document.getElementById("coms");
const result=document.getElementById("result");
const reset=document.getElementById("reset");

let myScore=0;
let ComsScore=0;

function comsChoice(){
    let num=Math.floor(Math.random()*3)+1;
    if(num==1){
        return "rk";
    }else if(num==2){
        return "Sk";
    }else{
        return "pk";
    }
}

let users=""
    rock.addEventListener("click",function(){
        users= "rk";
        playGame();
    })
    
    paper.addEventListener("click",function(){
        users="pk";
        playGame();
    })
    
    sisc.addEventListener("click",function(){
        users= "Sk";
        playGame();
    })
function playGame(){
    let compus=comsChoice();
    if(users=="pk"){
        if(compus=="pk"){
            result.innerHTML="Draw";
            result.style.backgroundColor="pink";
            result.style.color="black";
        }else if(compus=="rk"){
             result.innerHTML="Winner";
             result.style.backgroundColor="green";
             result.style.color="white";
             myScore++;
             mine.innerHTML=myScore;
        }else{
             result.innerHTML="Lose";
             result.style.backgroundColor="red";
             result.style.color="white";
             ComsScore++;
             coms.innerHTML=ComsScore; 
        }
    }else if(users=="rk"){
       if(compus=="rk"){
            result.innerHTML="Draw";
            result.style.backgroundColor="yellow";
            result.style.color="black";
        }else if(compus=="Sk"){
             result.innerHTML="Winner";
             result.style.backgroundColor="green";
             result.style.color="white";
             myScore++;
             mine.innerHTML=myScore;
        }else{
             result.innerHTML="Lose";
             result.style.backgroundColor="red";
             result.style.color="white";
             ComsScore++;
             coms.innerHTML=ComsScore; 
        } 
    }else{
        if(compus=="Sk"){
            result.innerHTML="Draw";
            result.style.backgroundColor="yellow";
            result.style.color="black";
        }else if(compus=="pk"){
             result.innerHTML="Winner";
             result.style.backgroundColor="green";
             result.style.color="white";
             myScore++;
             mine.innerHTML=myScore;
        }else{
             result.innerHTML="Lose";
             result.style.backgroundColor="red";
             result.style.color="white";
             ComsScore++;
             coms.innerHTML=ComsScore; 
        }
    }
}

reset.addEventListener("click",function(){
    myScore=0;
    ComsScore=0;
    mine.innerHTML=myScore;
    coms.innerHTML=ComsScore;
    result.innerHTML="The Result"
    result.style.backgroundColor="black";
    result.style.color="white";
});