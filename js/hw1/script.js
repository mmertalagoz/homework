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
        
        let popUpDone = document.createElement('div');
        let popUpCross = document.createElement('div');

        popUpDone.classList.add('successPopUp');
        popUpDone.classList.add('activeDone');
        popUpDone.classList.remove('activeFail');
        popUpDone.innerHTML = text;
        popUpCross.classList.add('closeCross');
        popUpDone.appendChild(popUpCross);

        popUpCross.onclick = () => {
            popUpDone.remove()
        }

        document.body.appendChild(popUpDone);

        setTimeout(
            () => {
                popUpDone.remove();
            },
            5000
        )

    }
    
    let popUpHoistingFail = (text) => {
        let popUpDone = document.createElement('div');
        let popUpCross = document.createElement('div');

        popUpDone.classList.add('successPopUp');
        popUpDone.classList.add('activeFail');
        popUpDone.classList.remove('activeDone');
        popUpDone.innerHTML = text;
        popUpCross.classList.add('closeCross');
        popUpDone.appendChild(popUpCross);

        popUpCross.onclick = () => {
            popUpDone.remove()
        }

        document.body.appendChild(popUpDone);

        setTimeout(
            () => {
                popUpDone.remove();
            },
            5000
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

