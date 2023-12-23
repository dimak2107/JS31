// Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов:

const obj1 = { here: { is: "on", other: "3" }, object: "Z" };
const obj2 = { here: { is: "on", other: "2" }, object: "Z" };

const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
  //return JSON.stringify(obj1) === JSON.stringify(obj2) ? 'Objects are equal' : 'Objects are not equal';
};

deepEqual(obj1, obj2);
// false

// Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return str.split("").toReversed().join("");
}

reverseStr("abcd");
// dcba

function reverseStr2(str) {
  return str.split("").reduceRight((acc, item) => acc + item, "");
}

reverseStr2("abcd");
// dcba

// Задание 1 – Создать объект counter всеми возможными способами;

const counterOne = {
  count: 0,
};

const counterTwo = Object.create({ count: 0 });

class Counter {
  constructor(num = 0) {
    this.count = num;
  }
}

const counterThree = new Counter();

function counterCreator(num = 0) {
  this.count = num;
}

const counterFour = new counterCreator();

//Задание 2 – Скопировать объект counter всеми возможными способами;

const counter = {
  count: 1,
  isActive: true,
  info: {
    author: "host",
    creationTime: "11.11.2023, Mon, 22:15",
  },
};

const cloneOne = { ...counter };
const cloneTwo = Object.assign({}, counter);

const cloneThree = JSON.parse(JSON.stringify(counter));

//Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

let count = 0;

function makeCounterOne() {
  count++;
  return count;
}

const makeCounterTwo = () => {
  count++;
  return count;
};

const makeCounterThree = function () {
  count++;
  return count;
};
