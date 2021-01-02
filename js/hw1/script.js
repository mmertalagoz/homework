const credentials = {
    name: 'admin',
    password: 'qwerty',
}

let userDataInp = () => {

    let clearInp = () => {
        document.getElementById('userName').value = '';
        document.getElementById('userPass').value = '';            
    }
    
    let popUpHoistingDone = (text) => {
        let popUpDone = document.querySelector('.successPopUp');
        popUpDone.classList.add('activeDone');
        popUpDone.classList.remove('activeFail');
        popUpDone.innerHTML = text;
        setTimeout(
            () => {
                popUpDone.classList.remove('activeDone')
            },
            3000
        )
    }
    
    let popUpHoistingFail = (text) => {
        let popUpDone = document.querySelector('.successPopUp');
        popUpDone.classList.add('activeFail');
        popUpDone.classList.remove('activeDone');
        popUpDone.innerHTML = text;
        setTimeout(
            () => {
                popUpDone.classList.remove('activeFail')
            },
            3000
        )
    }

    let userName = document.getElementById('userName').value;
    let userPass = document.getElementById('userPass').value;

    if (userName == credentials.name && userPass == credentials.password) {
        let text = 'Добро Пожаловать'
        clearInp();
        popUpHoistingDone(text);
    } else if (userName == '') {
        let text = 'Введите Логин'
        popUpHoistingFail(text);
    } else if (userPass == '') {
        let text = 'Введите Пароль'
        popUpHoistingFail(text);
    } else {
        let text = 'Пользователь не найден'
        popUpHoistingFail(text);
    }
    
}
