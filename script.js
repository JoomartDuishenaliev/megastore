const btn = document.querySelector('#nextLink');
const notification = document.querySelector('.notification');

btn.onclick = () => {
    const field = document.querySelector('div.highlight');
    const field2 = document.querySelector('div.highlight2');

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
        field.classList.add('border', 'border-warning');
        field2.classList.add('border', 'border-warning');

        let timeoutId = setTimeout(() => {
            notification.className = '';
            notification.textContent = '';
            clearTimeout(timeoutId);
        }, 2000)

        btn.href = '#';
    } else {
        localStorage.setItem('dataStorage', JSON.stringify(storage));
        btn.href = 'form2.html';
    }

}