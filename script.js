const btn = document.querySelector('button');

const lastName = document.querySelector('#mandatoryInfo');
const firstName = document.querySelector('#mandatoryName');
const passport = document.querySelector('#mandatoryPass');
const identification = document.querySelector('#mandatoryId');
const issueDate = document.querySelector('#mandatoryDate');

function findValue (values){
    values.onchange = () => values;
}
findValue('lastName', 'firstName', 'passport');

btn.onclick = () => {

    let dataStorage = {
        surname: lastName.value,
        name: firstName.value,
        passport: passport.value,
        personalNumber: identification.value,
        dateOfIssue: issueDate.value
    }

    localStorage.setItem('dataStorage', JSON.stringify(dataStorage));
}