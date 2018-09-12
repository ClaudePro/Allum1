matches = 11;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createGame() {
    rl.question('Hi there ! Do you want to play a little game with me ? [yes/no] ', (answer) => {
        if (answer == 'yes', 'ye', 'y') {
            console.log(`Yikes ! Let's play !`);
            for (i = 0; i < matches; i++) { 
                display = process.stdout.write("| ");
            }
            console.log("\n");
            rmMatches();
        }
        else if (answer == 'no', 'nope', 'n') {
            console.log(`Alright, maybe later...`);
            Error();
        } else {
            console.log("I'm sorry I don't understand your answer...");
            Error();
        }
        rl.close();
    });
}

function rmMatches() {

    rl.question('Remove 1 to 3 matches per turn =>  ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`You removed ${answer} matches.`);
        rl.close();
        checkAnswer(answer);
    });
}

function checkAnswer(answer) {
    if (answer == '1', '2', '3') {
        parseInt(answer);
    } else {
        quit('The answer must be an integer between 1 and 3.')
    }
}

createGame();

// choper ce que l'utilisateur mets en ligne de commande
// vérifier la réponse
// soustraire au tableau et réafficher le tableau