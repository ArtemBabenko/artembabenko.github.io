const API = 'https://test-users-api.herokuapp.com/'

let users = [];


let userNameInput = document.querySelector('#user-name-input');
let userAgeInput = document.querySelector('#user-age-input');
let addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
    if (userNameInput.value != "" && userAgeInput.value != "") {
        createUser();
        userNameInput.value = "";
        userAgeInput.value = "";
    }
});

let cardContainer = document.querySelector('#card-container');

function getUsers() {
    return fetch(API + 'users').then(res => res.json())
        .catch(err => {
            console.log('Cant get users', err);
        });
}

getUsers().then(response => {
    users = response.data;
    console.log('users: ', users);
    initUser();
});


function initUser() {
    cardContainer.innerHTML = '';
    users.forEach((element) => {
        const divContainer = document.createElement('div');
        divContainer.className = 'user-card';

        const btnContainer = document.createElement('div');
        btnContainer.className = 'user-card-button';

        const nameInput = document.createElement('input');
        nameInput.className = 'user-card-name';
        nameInput.defaultValue = `${element.name}`;

        const ageInput = document.createElement('input');
        ageInput.className = 'user-card-age';
        ageInput.defaultValue = `${element.age}`;


        const btnDelete = document.createElement('div');
        btnDelete.className = 'card-button-delete';
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', () => {
            deleteUser(element.id);
        });

        const btnSave = document.createElement('div');
        btnSave.className = 'card-button-save';
        btnSave.textContent = 'Save';
        btnSave.addEventListener('click', () => {
            changeValue(element.id, nameInput.value, ageInput.value);
            nameInput.style.backgroundColor = 'lightgreen';
            ageInput.style.backgroundColor = 'lightgreen';
        });


        btnContainer.append(btnDelete);
        btnContainer.append(btnSave);
        divContainer.append(nameInput);
        divContainer.append(ageInput);
        divContainer.append(btnContainer);
        cardContainer.append(divContainer);
    });

}

async function createUser() {
    const user = {
        name: userNameInput.value,
        age: userAgeInput.value
    };

    console.log(user);
    fetch(API + 'users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then((res) => {
        return res.json();
    }).then((data) => {
        user.id = data.id;
        users.unshift(user);
        initUser();
    }).catch(err => {
        console.log(err);
    })
}

async function changeValue(id, userNameInput, userAgeInput) {

    const user = {
        name: userNameInput,
        age: userAgeInput
    };

    await fetch(API + 'users/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    getUsers().then(response => {
        users = response.data;
        console.log('users: ', users);
        initUser();
    });
}

async function deleteUser(id) {

    await fetch(API + 'users/' + id, {
        method: 'DELETE'
    })
    users = users.filter((user) => user.id !== id);
    initUser();
}