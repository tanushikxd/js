/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/
// let userName = 'XD' //string (строка)

// let number = 30 // Numbers

// console.log(number)

// console.log(3<6) //true-false
// console.log(3*5)

// //null - nothing

// let age = null;


// //undefined

// let userNaMe;
// console.log(userNaMe)


// let someName = 'Haru'
// console.log(someName)

//BigInt

//ОПЕРАТОРЫ СРАВНЕНИЯ И УСЛОВИЯ

// console.log(10>5)
// console.log(20>80)


// let result = 10==5;
// console.log(result)

// let number = 5
// console.log(number < 10)

//Условия

// const time = 12

// if(time < 12){
//     console.log('Good morning')
// } else if (time >=12 && time <18){
//     console.log('Good afternoon')
// } else{
//     console.log('Good evening')
// }


//Тернарный оператор ЛУЧШЕ РАБОТАТЬ ЧЕРЕЗ НЕГО

// 10 > 12 ? console.log('Right') : console.log('Wrong');


// let time = 20;
// let greeting = time < 12 ? 'Morning' : 'Good Afternoon';

// console.log(greeting)

// let userName = 'Haru';
// console.log(`Hello, ${userName} !
// How are you?`);



// DRY = DONT REPEAT YOURSELF




// sayHello();
// // FUNCTION DECLARATION вызов функции может быть до того как она обьявлена
// function sayHello() {
//     console.log('Hello, dear costumer!')
// }




// //FUNCTION EXPRESSION 
// const sayHi = function() {
//     console.log('Hello');
// }
// sayHi();



// Параметры и аргументы

// function sayHi(name) {
//     console.log(`Hello, ${name}!
//     What are you doin'?`);
// }
// sayHi('Tatyana');
// sayHi('HAriBabu');



// function summ (a, b) {
//     const result = a - b;
//     return result;

// }
// let result = summ(20, 30);
// console.log(result)


// function summ (a, b) {
//     return a / b;
// }

// function diff (a, b) {
//     return a * b;
// }

// function doSomething(func) {
//     x = 50;
//     y = 40;
//     let result = func (x, y);
//     console.log(result);
// }

// doSomething(summ);
// doSomething(diff);



// Самовызывающаяся функция

// (function sayHi () {
//     console.log('Hello!');
// })();

// (function (a, b) {
//     console.log(a + b);
// })(5, 13);



// Стрелочные функции

// function sayHi(name) {
//     console.log('Hello! How are you?');
// }
// sayHi('Tatyana');

// const SayHi = (name) => {
//     console.log('Hello! How are you?')
// }
// SayHi('Tatyana');



// window.document.querySelector('.test-1');
// console.log(button);

// 1
// let admin, name;
// name = 'Jonh';
// admin = name;
// alert(admin);


// 2
// let ourEarth = 'Earth';
// let currenUserName = 'Anyname';

// 3
// let name = 'Ilya';
// hello1
// hello name
// hello Ilya


// 4
// let name = prompt('What is your name?'), 
// age = +prompt('Age?', 18);

// alert(`Hello, ${name}!`);
// let message = (age < 18) ? 'Under 18' : 'Over 18';
// alert(message);


// 5
// console.log('4' + 1 + 0); //410
// console.log('5' - 1 + 0); //4
// console.log(true + false); //1
// console.log(6 / '3'); //2
// console.log('2' * '3'); //6
// console.log( 4 + 5 + 'px'); //9px
// console.log("$" + 4 + 5); //$45
// console.log("4" - 2); //2
// console.log("4px" - 2); //NaN
// console.log("  -9  " + 5); //-9 5
// console.log("  -9  " - 5); //-14
// console.log(null + 1); //1
// console.log(undefined + 1); //Nan
// console.log(" \t \n" - 2) //2


//6
// let a = ('Первое число?', 1);
// let b = ('Второе число?', 2);
// alert(a + b);

// 7
// let num = 3;
// alert(num);


// 8
// let a, b
// a = 10;
// b = 2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b)
// alert(a+b);
// alert(a-b);
// alert(a*b);
// alert(a/b);


// 9
// function summ (c, d) {
//     let result = c + d;
//     return result;
// }
// let result = summ(15, 2);
// console.log(result)


// 10
// function summ (a, b, c) {
//     let result = a + b +c;
//     return result;
// }
// let result = summ(10, 2, 5);
// console.log(result);


//11
// function summ ( a, b) {
//     let c = a - b;
//     return c ;
// }
// function summ2(c, d) {
//     let result = c + d;
//     return result;
// }
// let c = summ(17, 10);
// console.log(c);
// let result = summ2(7, 7);
// console.log(result);


// 12
// let someNumber = 16;
// function pow2(someNumber) {
//     return someNumber**2;
// }
// console.log(someNumber**2);
// ИЛИ
// console.log(someNumber**2);

// 13
// alert(60 * 60); //hourly
// alert(60 * 60 * 24); //daily
// alert(60 * 60 * 30); //monthly

// let hour = '23';
// let min = '38';
// let sec = '58';
// alert(`hour :  + min : + sec`);


