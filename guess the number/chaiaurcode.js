let randomnumber = parseInt(Math.random() * 100 + 1);
console.log(randomnumber);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const loeorhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguesses = 1 ;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
        
    })
}

function validateguess (guess){
    // mtlb value 1 sai 100 kai beech mai hai ya nhi , no. toh hai na yeh sai 
     if (isNaN(guess)) {
        alert('please enter a valid number')
     } else if (guess < 1){
        alert('please enter a number more than 1 ')
     } else if (guess > 100){
        alert('please enter a number less than 100 ')
     } else {
        prevguess.push(guess)
        if(numguesses === 11 ){
            displayguess(guess);
            displaymsg(`game over. the random number was ${randomnumber}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
     }
}

function checkguess (guess) {
    // kahi voh value random no. kai eqaul hai na nhi if equal then use displaymsg to print that you have won the game
    // value low hai high hai wo batao

    if (guess === randomnumber){
        displaymsg(`you guessed it right`)
        endgame()
    } else if (guess < randomnumber){
        displaymsg(`number is Too low`)
    } else if (guess > randomnumber){
        displaymsg(`number is Too high`)
    }

}

function displayguess (guess){
    // value ko clean karaiga kyukie next values bhi input karni hai, jitnai bhi guess will update that and will update guess remainig also 

    userinput.value = '' ;
    guessSlot.innerHTML += `${guess} , ` ;
    numguesses++;
    remainig.innerHTML = `${11 - numguesses}` ;

}

function displaymsg (msg) {
    // jo loworhigh upar mai liya usko as it is print kar daigai

    loeorhigh.innerHTML = `<h2>${msg}</h2>`
}

function endgame(){
    userinput.value = '';
    userinput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame"> Strart new game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame()
}

function newgame(){
    const newgamebutton  = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function(e){
       randomnumber =  parseInt(Math.random() * 100 + 1);
       prevguess = [] ;
       numguesses = 1 ;
       guessSlot.innerHTML = '' ;
       remainig.innerHTML = `${11 - numguesses}` ;
       userinput.removeAttribute('disabled');
       startover.removeChild(p);
        playgame =true;

    })
}
