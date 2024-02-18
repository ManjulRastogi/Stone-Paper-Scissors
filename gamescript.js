let userName=prompt("ENTER YOUR NAME :");
let start=0;
let you = document.querySelector("#you");
you.innerText= userName ;
let msg=document.querySelector(".msg");
msg.addEventListener("click" , () =>{ 
    start=1;
    check();
})
function check()
{ 
    
let userScore=0;
let compScore=0;
const msg = document.querySelector(".msg");
let result=document.querySelector(".result");
let userPara = document.querySelector("#score1");
let compPara = document.querySelector("#score2");

const genCompchoice = function()
{
    let options =["stone" , "paper" , "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return (options[idx]);
};

const drawGame = () =>
{
    msg.innerText="GAME WAS DRAW! PLAY AGAIN ";
    document.body.style.backgroundColor = "#CDFADB";
    if(userScore==compScore)
    {
        result.innerText = " DRAW !"
    }
}

const showWinner = function (userChoice,compChoice,userWin)
{
    userChoice=userChoice.toUpperCase();
    compChoice=compChoice.toUpperCase();

    if(userWin)
    {
        userScore++;
        userPara.innerText=userScore;
        msg.innerText=`TECHY CHOOSE ${compChoice}! YOU WIN! ${userChoice} BEATS ${compChoice}!`;
        msg.style.backgroundColor = "#9DBC98" ;
        if(userScore>compScore)
        {
            result.innerText = "YOU ARE WINNING !"
        }
    }
    else{
        compScore++;
        compPara.innerText = compScore;
        msg.innerText =`TECHY CHOOSE ${compChoice} ! YOU LOSS!${compChoice} BEATS ${userChoice}`;
        document.body.style.backgroundColor = "#FFCF96"
        if(userScore<compScore)
        {
            result.innerText = "YOU ARE LOSING !"
        }
    }
}

const playGame = function(userChoice){
    const compChoice=genCompchoice();
    if (userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true ;
        if(userChoice == "stone")
        {
            //paper , scissor
            userWin = compChoice === "scissor"? true:false;
        }
        else if( userChoice == "paper")
        {
            //stone , scisssor
            userWin= compChoice==="stone"?true : false;
        }
        else{
            //paper, stone;
            userWin = compChoice === "paper"? true : false;
        }
        showWinner(userChoice,compChoice,userWin);
    }
}

let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click" , () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }) 
})
let reset= document.querySelector(".reset");
reset.addEventListener( "click" , ()=>{
    location.reload();
}

)

}
