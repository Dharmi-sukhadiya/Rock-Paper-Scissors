let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    //rock, paper, scissors
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawgame=() => {
    console.log("draw");
    msg.innerText="game was draw. play again"
    msg.style.backgroundColor="#081b31";
}

const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore++
        userscorepara.innerText=userscore
        console.log("you win!")
        msg.innerText=`you win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++
        compscorepara.innerText=computerscore;
        console.log("you lose")
        msg.innerText=`you lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const computerchoice=gencompchoice()
    console.log("computer choice=",computerchoice);

    if(userchoice===computerchoice){
      drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            // scissors,paper
            userwin=computerchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            //rock,scissors
            userwin=computerchoice==="scissors"?false:true;
        }else{
            //rock,paper
            userwin=computerchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,computerchoice); //showwinner(userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("choice was clecked",userchoice); 
        playgame(userchoice);
    })
})
