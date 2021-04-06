class Game{
    constructor(){

    }

    //read the gamestate from the database and storing it in gameState variable
    getState(){
     var gameStateRef = database.ref("gameState");
     gameStateRef.on("value",function(data){
        gameState= data.val();
     })
    }

    //update the value of the gameState with state's value
    update(state){
     database.ref("/").update({
         gameState: state
     })
    }

    //if gameState = 0 then we want a form and player object to be created
    start(){
     if(gameState===0){
         player=new Player();
         player.getCount();
         form = new Form();
         form.display();
     }
    }
} 