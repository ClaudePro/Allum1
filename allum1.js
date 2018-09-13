matches = 11;
log = console.log;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createGame() {
    rl.question("Hi there ! Do you want to play a little game with me ? [yes/no] ", (answer) => {
        if (answer === 'yes' || answer === 'ye' || answer === 'y' || answer === 'Y') {
            log("Yikes ! Let's play !\n");
            for (i = 0; i < matches; i++) { 
                display = process.stdout.write("| ");
            }
            log("\n");
            rmMatches();
        }
        else if (answer === 'no' || answer === 'n' || answer === 'nope' || answer === 'N') {
            log(`Alright, maybe later...`);
            process.exit(-1);
        } else {
            log("I'm sorry I don't understand your answer...");
            process.exit(-1);
        }
    });
}

function rmMatches() {

    rl.question("Remove 1 to 3 matches per turn =>  ", (answer) => {
        log("\n");
        log(`You removed ${answer} matches.`);
        log("\n");
        matches = matches - answer;
        for (i = 0; i < matches; i++) { 
            display = process.stdout.write("| ");
        }
        log("\n");
        checkAnswer(answer);
        if (matches === 1) {
            log("You win ! Congratulation !")
            process.exit(-1);
        }
        else if (matches > 1) {
            AI = Math.floor(Math.random() * 3) + 1;
            log("\n");
            log(`I removed ${AI} matches.`);
            log("\n");
            matches = matches - AI;
            for (i = 0; i < matches; i++) { 
                display = process.stdout.write("| ");
            }
            log("\n");
            rmMatches();
        }
        else if (answer > matches) {
            log("You couldn't remove that many matches, you lose !");
            process.exit(-1);
        }
        else if (answer == "") {
            log("You must put a number of matches to remove ! (1 to 3)");
            process.exit(-1);
        }
        else if (isNaN(matches)) {
            log("You can only put a number between 1 and 3 to removes some matches !");
            process.exit(-1);
        }
    });
}

function checkAnswer(answer) {
    if (answer == '1', '2', '3') {
        parseInt(answer);
    } else {
        log('The answer must be an integer between 1 and 3.')
        process.exit(-1);
    }
}

createGame();

// choper ce que l'utilisateur mets en ligne de commande
// vérifier la réponse
// soustraire au tableau et réafficher le tableau