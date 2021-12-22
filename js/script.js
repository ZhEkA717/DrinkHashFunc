"use strict";

function HashStorageFunc() { // класс 
    let hesh = {};  //приватное свойство 
    this.addValue = function (key, value) { // публичный метод 
        if (!(key in hesh))
            hesh[key] = value;
    }
    this.getValue = function (key) {
        if (key in hesh) {
            return hesh[key];
        }
        console.log(key);
    }
    this.deleteValue = function (key) {
        if (key in hesh) {
            delete hesh[key];
            return true;
        } else {
            return false;
        }
    }
    this.getKeys = function () {
        return Object.keys(hesh);
    }
}

let drinkStorage = new HashStorageFunc();// создаем объект класса

function addDrink() {
    let drink = prompt('Введите напиток').toLowerCase();
    while (drink == "") {
        drink = prompt('Введите напиток').toLowerCase();
    }
    if (drink != null) {
        var alc = confirm('Напиток алкогольный?');
        var rec = prompt('Введите рецепт напитка');
        while (rec == "") {
            rec = prompt('Введите рецепт напитка');
        }
    }
    if (rec != null) {
        let alc_rec = {
            'Alcohol': (alc ? 'Да' : 'Нет'),
            'Reciepe': rec
        };
        drinkStorage.addValue(drink, alc_rec);// вызов метода addValue
    }
}

function getDrink() {
    let drink = prompt('Введите напиток').toLowerCase();
    while (drink == "") {
        drink = prompt('Введите напиток').toLowerCase();
    }
    if (drink != null) {
        let checkDrink = drinkStorage.getValue(drink);
        if (checkDrink) {
            alert(`
            напиток: ${drink}
            алкогольный: ${checkDrink["Alcohol"]}
            рецепт приготовления: ${checkDrink["Reciepe"]}`);
        } else {
            alert('Такого напитка не сущевствует')
        }
    }
}

function deleteDrink() {
    let drink = prompt('Введите напиток').toLowerCase();
    while (drink == "") {
        drink = prompt('Введите напиток').toLowerCase();
    }
    if (drink != null) {
        let checkDelete = drinkStorage.deleteValue(drink);
        if (checkDelete) {
            alert('Напиток удален')
        } else {
            alert('Такого напитка не существует')
        }
    }
}

function listOfDrink() {
    let arrayOfDrinks = drinkStorage.getKeys();
    if (arrayOfDrinks.length > 0) {
        alert(arrayOfDrinks);
    } else if (arrayOfDrinks.length == 0) {
        alert("Напитков нет");
    }
}