var elements = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validVictory(){

    let winner = document.querySelector('.winner');

    if(playerOpt == 'paper'){
        if(enemyOpt == 'paper'){
            //Empate
            winner.innerHTML = "O jogo foi empatado";
        }else if(enemyOpt == 'scissor'){
            //Inimigo Ganhou
            winner.innerHTML = "O adversário ganhou";
        }else{
            //Player ganhou
            winner.innerHTML = "Você ganhou!!";
        }
    }else if(playerOpt == 'scissor'){
        if(enemyOpt == 'paper'){
            //Player ganhou
            winner.innerHTML = "Você ganhou!!"
        }else if(enemyOpt == 'scissor'){
            //Empate
            winner.innerHTML = "O jogo foi empatado";
        }else{
            //Inimigo Ganhou
            winner.innerHTML = "O adversário ganhou";
        }
    }else{
        if(enemyOpt == 'paper'){
            //Inimigo Ganhou
            winner.innerHTML = "O adversário ganhou";
        }else if(enemyOpt == 'scissor'){
            //Player Ganhou
            winner.innerHTML = "Você ganhou!!";
        }else{
            //Empate
            winner.innerHTML = "O jogo foi empatado";
        }
    }
}

function resetOpacityPlayer(){
    for(i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0.3;
    }
}

function enemyPlay(){
    let rand = Math.floor(Math.random()*3); // Math.rando()*3 dá um número aleatório entre 0 e 2, e o .floor arredonda esse número

    const enemyOptions = document.querySelectorAll('.enemy-options div > img');

    for(i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].style.opacity = 0.3;
        if(i == rand){
            enemyOptions[i].style.opacity = 1;
            enemyOpt = enemyOptions[i].getAttribute('opt');
        }
    }
    

    validVictory();
    
}

for(i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',function(e){
        resetOpacityPlayer();
        e.target.style.opacity = 1;
        playerOpt = e.target.getAttribute('opt');

        enemyPlay();
    })
}