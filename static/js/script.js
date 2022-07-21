function ageInDays() {

    var birthYear = prompt("What year were you born ..... good friend?");
    var currentYear = new Date().getFullYear();
    var daysInYear = 365;
    var ageInDays = (currentYear - birthYear) * daysInYear;

    var newH1 = document.createElement('h1');
    var textResult = document.createTextNode('You\'re ' + ageInDays + ' age in days')
    newH1.appendChild(textResult);
    document.getElementById('flex-col-result').appendChild(newH1);

}