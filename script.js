let gameBoard=[
    ["","",""],
    ["","",""],
    ["","",""]
]
let CURRENT_PLAYER="X"
let isGameOver=false
let NumOFPlayerTurn=0
document.getElementById("playerTurn").style.color="red"
function playerMove(cell){
    if(isGameOver){
        alert("Please click Restart button to start the game again")
        return
    }
    let row=cell.parentNode.rowIndex;
    let col=cell.cellIndex;
    if(gameBoard[row][col]==""){
        gameBoard[row][col]=CURRENT_PLAYER
        cell.innerHTML=CURRENT_PLAYER;
        NumOFPlayerTurn++
        if(checkWinner()){
            document.getElementById("message").innerHTML=`${CURRENT_PLAYER} won!`
            isGameOver=true
            if(CURRENT_PLAYER=="X"){
                document.getElementById("playerTurn").style.color="red"
            }else{
                document.getElementById("playerTurn").style.color="blue"
            }
            

        }
        else if(checkTie()){
            document.getElementById("message").innerHTML="Tie!"
        }else{
            
            CURRENT_PLAYER=CURRENT_PLAYER === "X" ? "O" : "X"
            if(CURRENT_PLAYER=="X"){
                
                document.getElementById("playerTurn").innerHTML=`${CURRENT_PLAYER}'S Turn`
                document.getElementById("playerTurn").style.color="red"
            }else{
                
                document.getElementById("playerTurn").innerHTML=`${CURRENT_PLAYER}'S Turn`
                document.getElementById("playerTurn").style.color="blue"
            }
            
        }

        
    }


    
}

function checkWinner(){
    for(let i=0;i<3;i++){
        if(gameBoard[i][0]==CURRENT_PLAYER && gameBoard[i][1]==CURRENT_PLAYER && gameBoard[i][2]===CURRENT_PLAYER){
            return true
        }
    }
    for(let i=0;i<3;i++){
        if(gameBoard[0][i]==CURRENT_PLAYER && gameBoard[1][i]==CURRENT_PLAYER && gameBoard[2][i]==CURRENT_PLAYER){
            return true
        }
    }
    for(let i=0;i<3;i++){
        if(gameBoard[0][0] ==CURRENT_PLAYER && gameBoard[1][1] ==CURRENT_PLAYER && gameBoard[2][2] ==CURRENT_PLAYER){
            return true
        }
    }
    for(let i=0;i<3;i++){
        if(gameBoard[0][2] ==CURRENT_PLAYER && gameBoard[1][1] ==CURRENT_PLAYER && gameBoard[2][0] ==CURRENT_PLAYER){
            return true
        }
    }
}


function checkTie(){
    const val=NumOFPlayerTurn===9 ? true :false
    return val
}

function restart(){
     gameBoard=[
        ["","",""],
        ["","",""],
        ["","",""]
    ]
     CURRENT_PLAYER="X"
     isGameOver=false
     NumOFPlayerTurn=0
    let cells=document.getElementsByClassName("cell")
    for(let i=0;i<cells.length;i++){
        cells[i].innerHTML=""
    }
    document.getElementById("playerTurn").innerHTML=`X'S Turn`
    document.getElementById("playerTurn").style.color="red"
    document.getElementById("message").innerHTML=""
}