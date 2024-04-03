import{

    playerchoice , 
    currentenemy,
    playerchoicebtn,
    enemychoice,
    e_img,
   numberofgreen,
   numberofred,
   score
    
    } from './index.js'
    
    
    
    function javid(){

    
    if(currentenemy.name === "javid"){

       
    if(playerchoice.green){

        if(numberofgreen > 2 && numberofgreen <5){

            document.querySelector('.enemy_score_display').innerHTML = `<div class="enemychoice_red enemyrchoicebtn"></div>`;

            score.player+=0;
            document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
            score.enemy+=5;
            document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
        
        }else {

            document.querySelector('.enemy_score_display').innerHTML = `<div class="enemychoice_green enemyrchoicebtn"></div>`;

            score.player+=3;
            document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
            score.enemy+=3;
            document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
        
        }

    }

    if(playerchoice.crimson){

        if(numberofred > 2 && numberofred < 8){

            document.querySelector('.enemy_score_display').innerHTML = `<div class="enemychoice_red enemyrchoicebtn"></div>`;
        
            score.player++;
            document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
            score.enemy++;
            document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
        
        }else {

            document.querySelector('.enemy_score_display').innerHTML = `<div class="enemychoice_green enemyrchoicebtn"></div>`;
        
            score.player+=5;
            document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
            score.enemy+=0;
            document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
        
        }

    }

    if(score.player >=20 && score.enemy >=20){
        alert("Tie");
    }
    
    else if(score.player >= 20){
        alert("You Win");
    }else if(score.enemy >= 20){
        alert("Javid Won");
    }
    
    
    
    
    }}
    
    playerchoicebtn.addEventListener("click" , javid);

    document.querySelector('.playerchoice_red').addEventListener("click" , javid);