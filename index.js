/*resource*/
let rock = document.querySelector('.r_btn > img');
let scissors = document.querySelector('.s_btn > img');
let paper = document.querySelector('.p_btn > img');

let comBoard = document.querySelector('.game_com')
let userBoard = document.querySelector('.game_me')

let startBtn = document.querySelector('.start_btn');
let resetBtn = document.querySelector('.reset_btn')

let userScore = document.querySelector('.score_my').innerHTML;
let uScore = 0;
let comScore = document.querySelector('.score_com').innerHTML;
let cScore = 0;
let randNum = 0;

const bgImg = ["./img/rock.jpg", "./img/scissors.jpg", "./img/p.jpg"];

/* start-btn, reset-btn */
startBtn.addEventListener('click',rotate);
let rotation = setInterval(displayCom,1000);

function rotate(){
    if(userBoard.children.length===2){
       userBoard.removeChild(userBoard.lastChild)//lastElementChild
       console.log(userBoard.children.length)
    }
    if(userBoard.children.length===1)
        rotation = setInterval(displayCom,1000);
        //console.log(userBoard.children.length)
}

/*computer*/
const cImg = document.createElement("img");
comBoard.appendChild(cImg);

function displayCom(){
    randNum = Math.floor(Math.random() * 3);
    if(randNum===0)
        comBoard.lastChild.setAttribute("src","./img/rock.jpg");
    else if(randNum===1)
        comBoard.lastChild.setAttribute("src","./img/scissors.jpg");
    else    
        comBoard.lastChild.setAttribute("src","./img/p.jpg");
}

/*user*/
const uImg = document.createElement("img");

function displayUser(x){
    userBoard.appendChild(uImg);
    if(x.target===rock)
        userBoard.lastChild.setAttribute("src","./img/rock.jpg");
    else if(x.target===scissors)
        userBoard.lastChild.setAttribute("src","./img/scissors.jpg");
    else    
        userBoard.lastChild.setAttribute("src","./img/p.jpg");
    clearInterval(rotation);
}

rock.addEventListener('click',displayUser);
scissors.addEventListener('click',displayUser);
paper.addEventListener('click',displayUser);

/*count*/

//rock.addEventListener('click',count);
//scissors.addEventListener('click',count);
//paper.addEventListener('click',count);

function count(e){
    setTimeout(function () { clearInterval(rotate) }, 0);
    let userNum=0;
    if(e===rock)
        userNum=0;
    else if(e===scissors)
        userNum=1;
    else
        userNum=2;

    //rock=0,scissors=1,paper=2
    if(randNum===0){
        if(user===0){
            userScore++;
            comScore++;}
        else if(user===1)
            comScore++;
        else
            userScore++;
        }else if(randNum===1){
            if(user===0){
                userScore++;
            }
            else if(user===1){
                userScore++;
                comScore++;
            }
            else
                comScore++;
        }else{
            if(user===0)
                comScore++;
            else if(randNum===1)
                userScore++;
            else{
                userScore++;
                comScore++;
            }
        }

        document.querySelector('score_my').innerHTML=userScore;
        document.querySelector('score_com').innerHTML=comScore;
}

/*reset*/
