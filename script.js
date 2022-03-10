
let getSecretNumber = () => parseInt(Math.random()*11);

let secretNumber = getSecretNumber();
console.log(secretNumber)
let attempts = 1;

function giveNumber(){
    let givenNumber = parseInt(document.getElementById("givenNumber").value);
    let answerHTML = document.getElementById("showAnswer");
    
    if (secretNumber === givenNumber){
        showAnswer.innerHTML = `Sua intuição é poderosa! O número secreto é ${secretNumber}`;
        secretNumber = getSecretNumber();
        attempts = 1;
    }
    else {
        attempts++;
        showAnswer.innerHTML = `Você errou... e somente tem mais ${(3-attempts+1)} tentativas`;
    }

    if (attempts > 3){
        showAnswer.innerHTML = `Você não tem mais tentativas, outro número será gerado`;
        secretNumber = getSecretNumber();
        attempts = 1;
    }
}
    