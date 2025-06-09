let userScore=0;
let compScore=0;
let userchoice="";
let compchoice=["Rock", "Paper", "Scissor"];
let computerChoice;

let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let msg=document.querySelector("#msg");
let uchose=document.querySelector(".youchose");
let cchose=document.querySelector(".compchose");


rock.addEventListener("click", ()=>{
    userchoice="Rock";
    uchose.innerText="You Chose : " + userchoice + " ✊";
    randomchose();
    winner();
})
paper.addEventListener("click", ()=>{
    userchoice="Paper";
    uchose.innerText="You Chose : " + userchoice + " ✋";
    randomchose();
    winner();
})
scissor.addEventListener("click", ()=>{
    userchoice="Scissor";
    uchose.innerText="You Chose : " + userchoice + " ✌️";
    randomchose();
    winner();
})

function emojis(compchoice){
    if(compchoice==="Rock") return " ✊"
    if(compchoice==="Paper") return " ✋"
    if(compchoice==="Scissor") return " ✌️"
}
function randomchose(){
     let randomIndex = Math.floor(Math.random() * compchoice.length);
    computerChoice = compchoice[randomIndex];
    cchose.innerText="Comp Chose : " + computerChoice + emojis(computerChoice);
}


function compwins(){
    msg.innerText="Comp Wins";
}
function userwins(){
    msg.innerText="You win";
}

function winner(){
    if(userchoice==="Rock" && computerChoice==="Paper"){
       compwins();
       compScore++;
       cscore.innerText=compScore;
    }else if(userchoice==="Paper" && computerChoice==="Scissor"){
       compwins();
       compScore++;
       cscore.innerText=compScore;
    }else if(userchoice==="Scissor" && computerChoice==="Rock"){
        compwins();
        compScore++;
        cscore.innerText=compScore;
    }else if(userchoice==="Paper" && computerChoice==="Rock"){
        userwins();
        userScore++;
        uscore.innerText=userScore;
    }else if(userchoice==="Scissor" && computerChoice==="Paper"){
        userwins();
        userScore++;
        uscore.innerText=userScore;
    }else if(userchoice==="Rock" && computerChoice==="Scissor"){
        userwins();
        userScore++;
        uscore.innerText=userScore;
    }else{
        msg.innerText="Draw";
    }
    msg.innerText=`You Chose ${userchoice} ${emojis(userchoice)} & Comp Chose ${computerChoice} ${emojis(computerChoice)} : ${msg.innerText} ${emojis(computerChoice)}`;
}
