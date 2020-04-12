//loads at load time
window.onload = function () {
    //run when button clicked
    document.getElementById('click').onclick = function(){
        
        //constant desclaration
        const FIRST = document.getElementById('first');
        const SECOND = document.getElementById('second');
        const THIRD = document.getElementById('third');
        const FOURTH = document.getElementById('fourth');
        const FIFTH = document.getElementById('fifth');
        const OUTPUT = document.getElementById('textOutput');
        
        //6 random numbers
        let die1Value = (Math.floor(Math.random() * 6) + 1);
        let die2Value = (Math.floor(Math.random() * 6) + 1);
        let die3Value = (Math.floor(Math.random() * 6) + 1);
        let die4Value = (Math.floor(Math.random() * 6) + 1);
        let die5Value = (Math.floor(Math.random() * 6) + 1);
        let matches = 0;
        let one = 0;
        let two = 0;
        let three = 0;
        let four = 0;
        let five = 0;
        let six = 0;
        
        //array designed to let me compare dice rolls in the for loop
        let range = new Array;
        range[0] = die1Value;
        range[1] = die2Value;
        range[2] = die3Value;
        range[3] = die4Value;
        range[4] = die5Value;
        

        
        //for loop that keeps track of the amount of times a single number is rolled
        for(let i = 0; i < 5; i++){
            if(range[i] == 1){
                one++
            }else if(range[i] == 2){
                two++;
            }else if(range[i] == 3){
                three++;
            }else if(range[i] == 4){
                four++;
            }else if(range[i] == 5){
                five++;
            }else if(range[i] == 6){
                six++;
            }
        }
        
        
        
        
        let die1Image, die2Image, die3Image, die4Image, die5Image;
        let total = 0;
        
        //creates the results string for the total rolled
        total = total + die1Value + die2Value + die3Value + die4Value + die5Value;
        let results = "You rolled a total of " + total + "! ";
        
        //if statements that figures out if a number was rolled at least 3 times
        if(one == 3|| two == 3 || three == 3 || four == 3 || five == 3 || six == 3){
            matches == 3
        }else if(one == 4|| two == 4 || three == 4 || four == 4 || five == 4 || six == 4){
            matches == 4
        }else if(one == 5|| two == 5 || three == 5 || four == 5 || five == 5 || six == 5){
            matches == 5
        }
        
        //if statements that determine how many matches it got to tell the player
        if(matches == 3){
            results = results + "You rolled " + matches + " of a kind!"
        }else if(matches == 4){
            results = results + "You rolled " + matches + " of a kind!!"
        }else if(matches == 5){
            results = results + "You rolled " + matches + " of a kind!!!"
        }else{
            results = results + "You didn't roll at least 3 matches"
        }
        
        //outputs the results to the screen
        OUTPUT.innerHTML = results;
        
        //switch statements assign the correct dice image to variables based on the random number chosen
        switch (die1Value) {
            case 1 : die1Image = "diceOne.png" ; break;
            case 2 : die1Image = "diceTwo.png" ; break;
            case 3 : die1Image = "diceThree.png" ; break;
            case 4 : die1Image = "diceFour.png" ; break;
            case 5 : die1Image = "diceFive.png" ; break;
            case 6 : die1Image = "diceSix.png" ; break;      
        }
        
        switch (die2Value) {
            case 1 : die2Image = "diceOne.png" ; break;
            case 2 : die2Image = "diceTwo.png" ; break;
            case 3 : die2Image = "diceThree.png" ; break;
            case 4 : die2Image = "diceFour.png" ; break;
            case 5 : die2Image = "diceFive.png" ; break;
            case 6 : die2Image = "diceSix.png" ; break;      
        }
        
        switch (die3Value) {
            case 1 : die3Image = "diceOne.png" ; break;
            case 2 : die3Image = "diceTwo.png" ; break;
            case 3 : die3Image = "diceThree.png" ; break;
            case 4 : die3Image = "diceFour.png" ; break;
            case 5 : die3Image = "diceFive.png" ; break;
            case 6 : die3Image = "diceSix.png" ; break;      
        }
        
        switch (die4Value) {
            case 1 : die4Image = "diceOne.png" ; break;
            case 2 : die4Image = "diceTwo.png" ; break;
            case 3 : die4Image = "diceThree.png" ; break;
            case 4 : die4Image = "diceFour.png" ; break;
            case 5 : die4Image = "diceFive.png" ; break;
            case 6 : die4Image = "diceSix.png" ; break;      
        }
        
        switch (die5Value) {
            case 1 : die5Image = "diceOne.png" ; break;
            case 2 : die5Image = "diceTwo.png" ; break;
            case 3 : die5Image = "diceThree.png" ; break;
            case 4 : die5Image = "diceFour.png" ; break;
            case 5 : die5Image = "diceFive.png" ; break;
            case 6 : die5Image = "diceSix.png" ; break;      
        }
        
        
        
        //update images
        FIRST.src = die1Image;
        SECOND.src = die2Image;
        THIRD.src = die3Image;
        FOURTH.src = die4Image;
        FIFTH.src = die5Image;
        
        
        
    }
}