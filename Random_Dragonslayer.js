var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying){
    if (youHit){
        console.log("You Hit The Dragon For " + damageThisRound + " Damage!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You Slew The DRAGON!!!");
            slaying = false;
        }else{
            youHit = Math.floor(Math.random() * 2);
        }
    }else{
    console.log("the dragon killed you")
    slaying = false;
    }
}