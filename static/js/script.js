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