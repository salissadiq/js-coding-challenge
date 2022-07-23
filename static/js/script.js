function ageInDays() {
    var birthYear = prompt("What year were you born ? .... good friend")
    var currentYear = new Date().getFullYear()
    var daysInYear = 365
    var daysOld = (currentYear - birthYear) * daysInYear
    
    var newH1 = document.createElement("h1")
    var textResult = document.createTextNode(' You\'re ' + daysOld + ' days age old')
    newH1.setAttribute('id', 'ageInDays')
    newH1.appendChild(textResult)
    document.getElementById('flex-box-result-container').appendChild(newH1)
}
function reset() {
    document.getElementById('ageInDays').remove()
}

//Challenge 2: Cat generator 

function generateCat() {
    var image = document.createElement('img')
    var catGenDiv = document.getElementById('cat-gen-div')
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    catGenDiv.appendChild(image)

}