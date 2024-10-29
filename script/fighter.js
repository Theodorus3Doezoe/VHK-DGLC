import {fighters, fightersAnswers} from '../script/AircraftDB.js'

document.querySelector('#restartButton').style.display = 'none'
let answeredQuestions = 0
let score = 0
let isRunning = true

const image = document.querySelector('#questionImage')
const display = document.querySelector('#answerDisplay')
// let numQuestions = prompt('How many questions do u want?')

function askQuestion() {
    if (isRunning) {
        let index = Math.floor(Math.random() * fighters.length)
        const randomSubArray = fighters[index];
        const q = randomSubArray[Math.floor(Math.random() * randomSubArray.length)];
        const a = fightersAnswers[index][0]
        const r = fightersAnswers[index][1]
        const fof = fightersAnswers[index][2]
        image.src = q
    
        console.log(a, r, fof)

        document.querySelector('#submitButton').onclick = function nextQuestion() {
        let answer = [];
        answer.push(document.querySelector('#answerList').value)
        answer.push(document.querySelector('#role').value)
        answer.push(document.querySelector('#fof').value)

        if (answer[0] === a && answer[1] === r && answer[2] === fof) {
            display.innerHTML = 'Correct!'
            score += 1;
        } else{
            display.innerHTML = `Fout, het was een ${a}, ${r}, ${fof}.`
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

