const btn = document.querySelector('#nextLink');

btn.onclick = () => {
    let surname = document.querySelector('#mandatoryInfo');
    let name = document.querySelector('#mandatoryName');
    let passport = document.querySelector('#mandatoryPass');
    let personalId = document.querySelector('#mandatoryId');
    let issueDate = document.querySelector('#mandatoryDate');

    let storage = {
        lastName: surname.value,
        firstName: name.value,
        passport: passport.value,
        IdNumber: personalId.value,
        issueDate: issueDate.value
    }

    if (storage.lastName.length === 0 || storage.firstName.length === 0 || storage.passport.length === 0 ||
        storage.IdNumber.length === 0 || storage.issueDate.length === 0) {
        alert('fill in all');
        return btn.href = '#';
    } else {
        localStorage.setItem('dataStorage', JSON.stringify(storage));
        return btn.href = 'form2.html';
    }
}