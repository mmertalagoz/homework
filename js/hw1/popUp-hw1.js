const credentials = {
    name: 'admin',
    password: 'qwerty',
}

let userSignIn = () => {

    let clearInp = () => {
        document.getElementById('userName').value = '';
        document.getElementById('userPass').value = '';            
    }
    
    let popUpHoisting = (text, background) => {
        
        let popUpDone = document.createElement('div');
        let popUpCross = document.createElement('div');

        popUpDone.classList.add('successPopUp');
        popUpDone.classList.add(background);
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
        let text = `Добро Пожаловать <br> ${userName}`;
        let background = 'activeDone';
        clearInp();
        popUpHoisting(text, background);
    } else if (userName == '') {
        let text = 'Введите Логин';
        let background = 'activeFail';
        popUpHoisting(text, background);
    } else if (userPass == '') {
        let text = 'Введите Пароль';
        let background = 'activeFail';
        popUpHoisting(text, background);
    } else {
        let text = `Пользователь ${userName} не найден`;
        let background = 'activeFail';
        popUpHoisting(text, background);
    }
}