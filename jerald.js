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
    
    
    
    function jerald(){

    
    if(currentenemy.name === "jerald"){

        let random = Math.random();

        console.log(random);

        if (random>=0 && random <1/2){

            document.querySelector('.enemy_score_display').innerHTML = `<div class="enemychoice_red enemyrchoicebtn"></div>`;

            if(playerchoice.green){

                score.player+=0;
                document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
                score.enemy+=5;
                document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
            
            }else if(playerchoice.crimson){

                score.player++;
                document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
                score.enemy++;
                document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
            
            }

        }else if(random >=1/2 && random<1){

            document.querySelector('.enemy_score_display').innerHTML = `<div class="enemychoice_green enemyrchoicebtn"></div>`;
        
            if(playerchoice.green){

                score.player+=3;
                document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
                score.enemy+=3;
                document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
            
            }else if(playerchoice.crimson){

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
            alert("Jerald Won");
        }
    
    
    }}
    
    playerchoicebtn.addEventListener("click" , jerald);

    document.querySelector('.playerchoice_red').addEventListener("click" , jerald);