var user = prompt ("What did you eat this morning: an apple, pancakes, cereal, or waffles?").toLowerCase();
switch(user){
    case 'an apple':
        var rotten = prompt("was it rotten?").toLowerCase();
        var clean = prompt("Then was it clean?");
        if (rotten === 'yes'){
            console.log("I hope you didn't feel too sick after eating it");
        }else if(clean === 'yes'){
            console.log("I'm glad you had a tasty, healthy breakfast");
        }else{
            console.log("Huh?");
        }
        break;
    case 'pancakes':
        var syrup = prompt("Did you use syrup?").toLowerCase();
        var butter = prompt("So then, did you use butter?");
        if (butter === 'yes' || syrup === "yes"){
            console.log("That sounds delicious!");
        }else if(butter === 'yes' && syrup === 'yes'){
            console.log("You'll have to tell me how that tastes, I've never tried it that combination before!");
        }else{
            console.log("How plain the must've been.");
        }
        break;
    case 'cereal':
        var type = prompt("Which kind of cereal did you eat?").toLowerCase();
            switch(type){
                                case 'cinamon toast crunch':
                    console.log("Mmm, that cinamony flavor is very tasty! Good choice!");
                    break;
                case 'rasin bran':
                    console.log("Eewww, I feel bad for you! Having to endure rasins n your breakfast!");
                    break;
                case 'cheerios':
                    console.log("To me they taste a bit bland. Hope you enjoyed them!");
                    break;
                case 'fruit loops':
                    console.log("My, you must've had a very sweet breakfast!");
                    break;
                case 'kellogs frosted flakes':
                    console.log("Sooo delicious!");
                    break;
                default:
                    console.log("I've never heard of that cereal before. You'll have to tell me how it tastes!");
            }
            break;
        case 'waffles':
            var blueberry = prompt("Was your waffle the blueberry kind?").toLowerCase();
            var strawberry = prompt("Then was it the strawberry kind?").toLowerCase();
            var original = prompt("Ok, therefore it has got to have been original, right?");
            if (blueberry === 'yes' || strawberry === 'yes'  || original === 'yes'){
                console.log("Mmm, delicious!");
            }else if (blueberry === 'yes' && strawberry === 'yes' && original === 'yes'){
                console.log("Waaaiiitttt, how does that work?");
            }else{
                console.log("Is that even a flavor?");
            }
            break;
    default:
        console.log("I've never heard of that breakfast food before.");
}