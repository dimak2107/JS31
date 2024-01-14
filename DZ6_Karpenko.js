// 1)
// console.log("1");
// setTimeout(() => console.log("2"), 1);
// let promiseNew = new Promise((resolve) => {
//   console.log("3");
//   resolve();
// });
// promiseNew.then(() => console.log("4"));
// setTimeout(() => console.log("5"));
// console.log("6");
// 1 - 3 - 6 - 4 - 5 - 2  в браузере
// 1 - 3 - 6 - 4 - 2 - 5  в ноде, так как для оптимизации нулевой делэй приравнивается к делэю в 1 мс
// I - выполняется синхронный код в порядке появления (логи 1,3,6)
// II - микротаски (лог 4)
// III - макротаски в порядке выполнения (с задержкой 0 мс - 5, с задержкой 1мс -2)

// // 2)
// let promiseTree = new Promise((resolve, reject) => {
// resolve("a");
// console.log("1");
// setTimeout(() => {
// console.log("2");
// }, 0);
// console.log("3");
// });
// 1 - 3 - 2   (синхронно 1 и 3, потом макротаска 2)

// 3)
// let promiseTwo = new Promise((resolve, reject) => {
//   resolve("a");
// });
// promiseTwo
//   .then((res) => {
//     return res + "b";
//   })
//   .then((res) => {
//     return res + "с";
//   })
//   .finally((res) => {
//     return res + "!!!!!!!";
//   })
//   .catch((res) => {
//     return res + "d";
//   })
//   .then((res) => {
//     console.log(res);
//   });
// создаем промиз со значением "а" -> 'ab' -> 'abc' -> 'abc' (т.к. finally ничего не принимает и не возвращает) ->
// -> ошибок не было и кэтч игнорируется -> печатаем 'abc'

// 4)
// function doSmth() {
//   return Promise.resolve("123");
// }
// doSmth()
//   .then(function (a) {
//     console.log("1", a); //
//     return a;
//   })
//   .then(function (b) {
//     console.log("2", b);
//     return Promise.reject("321");
//   })
//   .catch(function (err) {
//     console.log("3", err);
//   })
//   .then(function (c) {
//     console.log("4", c);
//     return c;
//   });
// 1 123 - callback on resolve
// 2 123 - callback on resolve. и возвращаем отклоненный промиз 321
// 3 321 - обрабатываем ошибку в блоке кэтч. ничего не возвращаем
// 4 undefined - так как на предыдущем шаге не было ретерна.

// 5)
// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

// 1 - 4 - 3 - 2
// I - выполняется синхронный код (логи 1 и 4)
// II - далее микротаска и лог 3
// III - макротаска лог 2

// 6) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого
// элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const arr = [10, 12, 15, 21];

const logger = (arr) => {
  loggerHelper(arr, 0);
};

const loggerHelper = (arr, i) => {
  if (i < arr.length) {
    setTimeout(() => {
      console.log(arr[i]);
      loggerHelper(arr, i + 1);
    }, 3000);
  }
};

logger(arr);
