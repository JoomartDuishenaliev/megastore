const btn = document.querySelector('button');

const lastName = document.querySelector('#mandatoryInfo');
const firstName = document.querySelector('#mandatoryName');
const passport = document.querySelector('#mandatoryPass');
const identification = document.querySelector('#mandatoryId');
const issueDate = document.querySelector('#mandatoryDate');

lastName.onchange = () => lastName.value;

btn.onclick = () => {

    let dataStorage = {
        surname: lastName.value,
    }

    localStorage.setItem('dataStorage', JSON.stringify(dataStorage));
}