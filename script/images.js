import {allAircraft, allAnswers} from '../script/AircraftDB.js'

const typeArray = []

for (let i = 0; i < allAnswers.length; i++) {
    typeArray.push(allAnswers[i][0])
}

const image = document.querySelector('#questionImage') //selecteerd de img in html
let value = ''
// function om de value van submit te krijgen 

document.querySelector('#displayImage').onclick = function imageValue() {
    value = document.querySelector('#answerList').value

    const index = typeArray.indexOf(value)
    let subIndex = 0
    let maxSubIndex = allAircraft[index].length - 1
    image.src = allAircraft[index][subIndex]

    document.querySelector('#nextImage').onclick = function nextImage() {
    if (subIndex < maxSubIndex)
        subIndex += 1
        image.src = allAircraft[index][subIndex]
    }

    document.querySelector('#previousImage').onclick = function previousImage() {
        if (subIndex > 0)
        subIndex -= 1
        image.src = allAircraft[index][subIndex]
    }
}




