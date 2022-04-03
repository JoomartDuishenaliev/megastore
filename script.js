const btn = document.querySelector('#nextLink');
const notification = document.querySelector('.notification');

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
        notification.className = 'alert alert-warning col fw-bold text-center text-primary fs-5';
        notification.style.height = '80px';
        notification.style.width = '470px';
        notification.style.position = 'absolute';
        notification.style.zIndex = '999';
        notification.textContent = 'Заполните необходимые поля';

        let timeoutId = setTimeout(() => {
            notification.className = '';
            notification.textContent = '';
            clearTimeout(timeoutId);
        }, 2000)

        return btn.href = '#';
    } else {
        localStorage.setItem('dataStorage', JSON.stringify(storage));
        return btn.href = 'form2.html';
    }
}