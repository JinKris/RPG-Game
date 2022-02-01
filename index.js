/*resource*/
let rock = document.querySelector('.r_btn > img');
let scissors = document.querySelector('.s_btn > img');
let paper = document.querySelector('.p_btn > img');

let comBoard = document.querySelector('.game_com')
let userBoard = document.querySelector('.game_me')

let continueBtn = document.querySelector('.continue_btn');
let resetBtn = document.querySelector('.reset_btn')

let userScore = parseInt(document.querySelector('.score_my').innerText);
let comScore = parseInt(document.querySelector('.score_com').innerText);
let userNum = -1;

/* board rotation */
let rotation = setInterval(displayCom,700);
continueBtn.setAttribute('style','display:none');
resetBtn.setAttribute('style','display:none');

/*computer*/
const cImg = document.createElement("img");
cImg.setAttribute('style','height:120px');
comBoard.appendChild(cImg);

function displayCom(){
    // randNUm:asset => 0:rock, 1:scissors, 2:papper
    randNum = Math.floor(Math.random() * 3);

    if(randNum===0)
        comBoard.lastChild.setAttribute("src","./img/rock.png")
    else if(randNum===1)
        comBoard.lastChild.setAttribute("src","./img/scissors.png");
    else    
        comBoard.lastChild.setAttribute("src","./img/p.png");
}

/*user*/
const uImg = document.createElement("img");
uImg.setAttribute('style','height:120px');

function displayUser(x){
    userBoard.appendChild(uImg);

    if(x.target===rock)
        userBoard.lastChild.setAttribute("src","./img/rock.png");
    else if(x.target===scissors)
        userBoard.lastChild.setAttribute("src","./img/scissors.png");
    else    
        userBoard.lastChild.setAttribute("src","./img/p.png");

    clearInterval(rotation);
}

/*count*/
function count(e){
    // randNUm:asset => 0:rock, 1:scissors, 2:papper
    //userNum:asset => 0:rock, 1:scissors, 2:papper
    if(e.target===rock) userNum=0;
    else if(e.target===scissors)    userNum=1;
    else    userNum=2;

    //compare
    if (randNum===0){ //rock
        if (userNum===1)    comScore=parseInt(comScore)+1;
        else if(userNum===2)    userScore=parseInt(userScore)+1;
    }else if(randNum===1){ //scissor
        if (userNum===0)    userScore=parseInt(userScore)+1;
        else if(userNum===2)   comScore=parseInt(comScore)+1;
    }else if(randNum===2) {//papper
        if (userNum===0)    comScore=parseInt(comScore)+1;
        else if(userNum===1)  userScore=parseInt(userScore)+1;
    }
        document.querySelector('.score_my').innerText = userScore;
        document.querySelector('.score_com').innerText = comScore;

        continueBtn.setAttribute('style','display:block');
        resetBtn.setAttribute('style','display:block');
        
}

/*rotate r,s,g*/
function rotate(e){
    if(userBoard.children.length===2){
       userBoard.removeChild(userBoard.lastChild)
       console.log(userBoard.children.length)
    }
    if(userBoard.children.length===1)   rotation = setInterval(displayCom,800);
    continueBtn.setAttribute('style','display:none');
    resetBtn.setAttribute('style','display:none');
}

/*reset*/
function reset(){
    userScore = 0;
    comScore = 0;
    document.querySelector('.score_my').innerText = userScore;
    document.querySelector('.score_com').innerText = comScore;
    userNum = -1;
    rotate();
}

/*event Listener*/
window.onload=function(){
    alert(
        `
        1. 타이밍에 맞춰 가위, 바위, 보 중 한개의 버튼을 누르세요
        2. 게임을 계속 하고 싶다면 continue 버튼을 누르세요
        3. 게임을 reset 하고 싶다면 reset 버튼을 누르세요

        비길 경우 점수가 오르지 않습니다. `
    )
}

continueBtn.addEventListener('click',rotate);
resetBtn.addEventListener('click',reset);

rock.addEventListener('click',displayUser);
rock.addEventListener('click',count);
scissors.addEventListener('click',displayUser);
scissors.addEventListener('click',count);
paper.addEventListener('click',displayUser);
paper.addEventListener('click',count);
