import {transport, transportAnswers} from '../script/AircraftDB.js'

document.querySelector('#restartButton').style.display = 'none'
let answeredQuestions = 0
let score = 0
let isRunning = true

const image = document.querySelector('#questionImage')
const display = document.querySelector('#answerDisplay')
// let numQuestions = prompt('How many questions do u want?')

function askQuestion() {
    if (isRunning) {
        let index = Math.floor(Math.random() * transport.length)
        const randomSubArray = transport[index];
        const q = randomSubArray[Math.floor(Math.random() * randomSubArray.length)];
        const a = transportAnswers[index][0]
        const fof = transportAnswers[index][2]
        console.log(a) //verwijderen maar dan weet ik het antwoord voor test purposes :)
        image.src = q
    
        document.querySelector('#submitButton').onclick = function nextQuestion() {
            let answer = [];

            answer.push(document.querySelector('#answerList').value)
            answer.push(document.querySelector('#fof').value)

            if (answer[0] === a && answer[1] === fof) {
                display.innerHTML = 'Correct!'
                score += 1;
            } else {
                display.innerHTML = `Fout, het was een ${a}, ${fof}.`
            }
            
            answeredQuestions += 1;
            askQuestion();
        };
        
    } else {
        image.src = 'https://www.hollandsnackexpress.com/images/com_hikashop/upload/brinta-volkoren-graanontbijt-500gram.jpeg'
        document.querySelector('#answerList').style.display = 'none'
        document.querySelector('#submitButton').style.display = 'none'
        document.querySelector('#restartButton').style.display = 'block'
        document.querySelector('#topContainer').innerHTML = `You had ${score} out of ${answeredQuestions} questions right.`
    }
    document.querySelector('#score').innerHTML = score
    document.querySelector('#numAsked').innerHTML = answeredQuestions
     
}

askQuestion();

