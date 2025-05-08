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

const logItems = function(array) {
    for(let i = 0; i < array.length; i += 1){
        console.log(`${i + 1} - ${array[i]}`);
    }
    return array;
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));
