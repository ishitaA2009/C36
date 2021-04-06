class Player{
    constructor(){

    }

    //to get the playerCount value from the DB
    getCount(){
       var playerCountRef = database.ref("playerCount");
       playerCountRef.on("value",function(data){
           playerCount = data.val();
       });
    }

    // to update the name of the player in DB
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name : name
        });
    }

    // to update the playerCount in the DB
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }
}