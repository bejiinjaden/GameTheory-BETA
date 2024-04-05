

export let e_img = document.querySelectorAll('.e_img');

 let charactersinfo = [ 
 {
    name : "David",
    Description: "David is a nice and forgiving guy who will never take any revenge.",
    Image : "david.png"},
 {
    name:"Alex" , 
    Description: "Alex is constantly seeking revenge, so be careful around him.",
    Image : "alex.png"},

 {
     name:"Jerald" , 
    Description: "Jerald is a mysterious guy; his actions could be good or bad, leaving everyone guessing.",
    Image : "jerald.png"},   
{
    name:"Javid" , 
    Description: "Javid is usually patient and forgiving, but he won't wait indefinitely to seek revenge.",
    Image : "javid.png"},
{
    name:"Lorem" , 
    Description: "Lorem is a lifeless youngster who simply copies others' actions.",
    Image : "lorem.png"},
];



let david = document.querySelector('.ch_david');

let alex = document.querySelector('.ch_alex');

let jerald = document.querySelector('.ch_jerald');

let javid = document.querySelector('.ch_javid');

let lorem = document.querySelector('.ch_lorem');

let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

export let currentenemy = {name : null};

function modalopen(character){
    if(!modal.classList.contains("modal_active")){
        
        let e_name = document.querySelector('.e_name');

        let content = document.querySelector('.content1');

        modal.classList.add("modal_active");

        e_name.textContent = character.name;
        content.textContent = character.Description;
        document.querySelector('.enemy_scoreboard_img').innerHTML
         = `<img src="${character.Image}" class="scoreboard_img">`
       
         currentenemy.name = character.name.toLowerCase();
         console.log(currentenemy);
         document.querySelector('.enemy_score_display').innerHTML = ""
         score.enemy = 0;
         score.player = 0;
         
         document.querySelector('.player_score').innerHTML = `<p class="display_score">${score.player}</p>`;
        
        document.querySelector('.enemy_score').innerHTML = `<p class="display_score">${score.enemy}</p>`;
         
    }else{
        modal.classList.remove("modal_active");
    };
    
    if(!overlay.classList.contains("overlay_active"))
        overlay.classList.add("overlay_active");
    
    else  overlay.classList.remove("overlay_active");
    
    
    
    }
    
    document.querySelector('.close_button').addEventListener("click",() =>{
    
    modal.classList.remove("modal_active");
    
    overlay.classList.remove("overlay_active");
    }
    
    );


charactersinfo.forEach(character => {
    let charcterelement = document.querySelector('.ch_' + character.name.toLowerCase());
    charcterelement.addEventListener("click" , () => modalopen(character) )
});

//plyaer moves------------------------------------------------------

export let playerchoice = {green:false , crimson:false} ;

export let playerchoicebtn = document.querySelector('.playerchoicebtn');

export let enemychoice = {choice : null};

export let numberofgreen = 0;

export let numberofred = 0;

export let red;

export let score = {player : 0 , enemy :0};

export let cooperate = false ;

export let defect = false ;

let playerchoice_green = document.querySelector('.playerchoice_green');

let playerchoice_red = document.querySelector('.playerchoice_red');

playerchoice_green.addEventListener("click" , () => {

    playerchoice.green = true;
    playerchoice.crimson = false;
    console.log(playerchoice);
    numberofgreen++;
    
});

playerchoice_red.addEventListener("click" , () => {

    playerchoice.crimson = true;
    playerchoice.green = false;
    console.log(playerchoice.crimson);
    numberofred++;
});



