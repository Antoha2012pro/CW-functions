// Оголошення функції/function declaration:
// function showMessage() { // Пузаті душки ОБОВ'ЯЗКОВІ!
//     // Те що у фігурних дужках це є тіло функції
//     const message = "Hello World!";
//     return message; // Проходить далі за пузаті дужки
// }

// Зверху та знизу дві однакові функції, але краще використовувати "Функціональний вираз/function expretion"

// Функціональний вираз/function expretion:
// const showMessage = function() {
//     function showMessage() { // Пузаті душки ОБОВ'ЯЗКОВІ!
//         // Те що у фігурних дужках це є тіло функції
//         const message = "Hello World!";
//     }
// }


// Стрілкова функція/function expretion:
// const showMessage = () => "Hello World!";


// Виклик будь-яких функцій:
// console.log(showMessage("Давід")); // Давід - передача аргументів у функцію
// або
// console.log(showMessage());


// const showMessage = function(name) { // name це параметр функції
// або
// const showMessage = function(name = "Антон", str) {
//     const message = `Hello World! ${str} ${name}`;
//     return message; // Якщо прибрати це то не буде код продовжуватись
//     // Все що написано після return не буде працювати
//     console.log(`Привіт`);
// }

// Коли ми використовуємо параметр, його можна завжди змінювати у пузатих дужках через кому
// const string = "Передає привіт";
// const res = "З вами прощається";
// console.log(showMessage("David", string)); //David це передача аргументів у функцію
// console.log(showMessage("Oleksandr", res));
// console.log(showMessage("Daria", "Рада всіх вітати!"));



// 1. Напиши функцію яка буде у параметрах приймати текст, і результатом її роботи буде текст у великому регістрі

// const convertedMessage = function(text) {
//     // console.log(text);
//     // const upperText = text.toUpperCase();
//     // return upperText
//     return text.toUpperCase();
// }

// const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas harum ullam vel eos animi. Dolorum repellendus quo est eius, inventore deserunt animi dicta soluta vel, totam tempore voluptates labore?";
// // console.log(convertedMessage([1, 2, 3, 5, 10]));
// console.log(convertedMessage(message));
// console.log(convertedMessage("hfgokjesrr"));


// 2. Написати функцію яка буде приймати 2 параметра. Результатом буде сума двух параметрів
// const sumNumber = function(numberOne, numberTwo) {
//     // const sum = numberOne + numberTwo
//     // return sum;
//     return `Сума двух параметрів ${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
// }

// console.log(sumNumber(5, 2));
// console.log(sumNumber(2, 2));
// console.log(sumNumber(2, 6));


// 3. Написати функцію яка буде приймати масив чисел і результатом її роботи буде сума всіх чисел у масиві

// const sumNumberArray = function(array) {
//     let sum = 0
//     // for (let i = 0; i < array.length; i += 1) {
//     // //     console.log(array[i]);
//     //        sum += i
//     // }
//     for (const i of array) {
//         // console.log(i);
//         sum += i
//     }
//     console.log(sum);
//     return array;
// }

// sumNumberArray([1, 5, 8])


// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const logItems = function(array) {
//     for(let i = 0; i < array.length; i += 1){
//         console.log(`${i + 1} - ${array[i]}`);
//     }
//     return array;
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));




// Урок 2

// const a = "Hello World!";
// console.log(a);
// // if (true) {
// //     const b = 0;
// // }
// // console.log(sum(1, 2));
// const sumElement = sum(2, 2); // Виклик функції і присвоєння до змінної sumElement
// console.log(sumElement);
// function sum(a, b) { // Оголошення функції
//     const res = a + b;
//     return res;
// }

// const multiPly = function(a, b) { // Не буде працювати якщо звернення до функції буде вище самої функції
//     return a * b;
// }
// console.log(multiPly(2, 6));

// const pvsevdoArts = function() {
//     const array = Array.from(arguments); // Конвертує з псевдомасива до обичного масива
//     console.log(array);
    
//     console.log(arguments);
//     for (let index = 0; index < arguments.length; index++) {
//         const element = arguments[index];
//         console.log(element);
//     }
// }
// console.log(pvsevdoArts(1, 5, 10, 30, 50));

// Два однакових приклада

// const pvsevdoArts = function(...args) {
//     console.log(args);
//     console.log(arguments);
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index];
//         console.log(element);
//     }
// }
// console.log(pvsevdoArts(1, 5, 10, 30, 50));


// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const logItems = function(array) {
//     for (let i = 0; i < array.length; i += 1){
//         console.log(`${i + 1} - ${array[i]}`);
//     }
//     return array;
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));


// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// const calculateEngravingPrice = function(message, pricePerWord) {
//     const result = message.split(" ");
//     const totalPrice = result.length * pricePerWord;
//     return totalPrice;
// }

// const stringMessage = "Напиши скрипт підрахунку вартості гравіювання прикрас";
// const price = 5000;

// const newMessage = "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore tempore facilis minus cumque asperiores corporis reprehenderit exercitationem debitis Numquam iusto blanditiis fuga adipisci voluptatibus assumenda modi harum mollitia velit animi sadam?";
// const newPrice = 1000;

// console.log(calculateEngravingPrice(stringMessage, price));
// console.log(calculateEngravingPrice(newMessage, newPrice));



// Урок 3

// Детальний опис "Стрілкова функція/function expretion":

// const sum = (b, c) => { // Якщо потрібно лише два налаштування
//     const res = a + b;
//     return res; // Фігурні дужки та return це явне повернення
// }

// const sumTwo = (a, b) => a + b; // Якщо нема фігурний дужок та return то це не явне повернення

//               (а)  знизу нема дужок
// const sumThree = a => { // Якщо потрібно лише одне налаштування
// }

// const mesLower = mes => {
//     const res = mes.toLowerCase();
//     return res;
// }
// console.log(mesLower("ASDASDSAD"));

// const show = (...args) => { // Якщо нема налаштування то такий синтаксис
//     console.log(args); // Псевдомасив у стрілкових функцій не працює
// }
// console.log(show(1, 2, 3, 4, 5, 6));


// Напишіть функцію, яка приймає на вхід масив чисел і повертає новий масив, в якому кожний елемент є квадратом відповідного елементу вхідного масиву.

// const arrayQuadrat = (number) => {
//     const newArray = [];
//     for (let index = 0; index < number.length; index++) {
//         const element = number[index] * number[index];
//         console.log(element);
//         newArray.unshift(element); // unshift додає у зворотньому та push у обичному напрямку
//     }
//     return newArray; // У такому випадку return обов'язковий
// }
// console.log(arrayQuadrat([1, 2, 3, 4, 5]));


// Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число

// const newArray = (array, number) => {
//     const newNumber = [];
//     for (const i of array) {
//         newNumber.push(i * number)
//     }
//     return newNumber
// }
// const arrayNumbers = [2, 4, 6, 8, 10];
// const value = 10;
// console.log(newArray(arrayNumbers, value));


// Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)

const myAverageScore = (arrayOfNumbers) => {
    let sum = 0;
    let message = "";
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
    }
    const mark = sum / arrayOfNumbers.length; // arrayOfNumbers.length це кількість елементів у масиві. НЕ ІНДЕКС!!!
    if (mark >= 91 && mark <= 100) {
        message = `Ви в групі A, ваш середній бал ${mark}`;
    } else if (mark >= 81 && mark <= 90) {
        message = `Ви в групі B, ваш середній бал ${mark}`;
    } else if (mark >= 71 && mark <= 80) {
        message = `Ви в групі C, ваш середній бал ${mark}`;
    } else {
        message = `Ви в групі D, ваш середній бал ${mark}`;
    }
    return message;
}
// Для перевірки:
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));