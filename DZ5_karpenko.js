// 1) Какие бывают алгоритмы сортировок ?

// 1 - Bubble sort. Заключается в проходе по массиву и замене соседних элементов
// местами в случае, если следующий элемент больше предыдущего (при сортировке по возрастанию)
// за 1 проход мы в худшем случае ставим на верное место 1 элемент. сложность алгоритма - O(N^2)
//
// 2 - Сортировка выбором. Заключается в прохоже по массиву и поиску наименьшего
// его элемента, который ставится в начало массива. После каждого прохода цикл запускается
// по оставшейся (правой) части массива. сложность алгоритма - O(N^2)
//
// 3 - Сортировка вставками. Заключается в том, что мы принимаем, что некоторая часть
// исходного массива отсортирована (изначально состоит из первого элемента массива) и после сравнения
// элементов подмассива (начиная с последнего элемента) с текущим элементом мы будем менять их местами
// пока они не окажутся в правильном порядке. сложность алгоритма - O(N^2)
//
// 4 - Quick sort. Заключается в том, что мы принимаем некий опорный элемент pivot из массива и делим
// исходный массив на 2 псевдомассива; установив флажки left и right на нулевой и последний элемент массива
// проходимся по нему в поисках такого значения слева от pivot, чтобы оно было >pivot, далее справа от
// pivot мы ищем такое значение, которое <= pivot. если такие значения найдены - мы меняем эти элементы
// местами. когда все элементы поменяны - слева от pivot элементы <= pivot, а справа - элементы > pivot.
// Далее мы рекурсивно обходим эти псевдомассивы( [от нулевого до пивот] и [от пивот до последнего]),
// пока в каждом из них не останется по 1 элементу. средняя сложность алгоритма - O(N log N)
//
// также встречаются различные вариации и модификации перечисленных перечисленных методов сортировки

//bubbleSort
const arrayToSort = [3, 7, 4, 9, 5, 2, 12, 1];
const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let value = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = value;
      }
    }
  }
  return arr;
};

//сортировка выбором
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

//сортировка вставкой
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

// quick sort
const quickSort = (arr) => {
  return quickSortHelper(arr, 0, arr.length - 1);
};

const quickSortHelper = (arr, left, right) => {
  if (arr.length < 2) return arr;

  const index = partition(arr, left, right);

  if (left < index - 1) {
    quickSortHelper(arr, left, index - 1);
  }
  if (index < right) {
    quickSortHelper(arr, index, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// 2) Прочитать про "Операторы и выражения, циклы в JS"

// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

// const person = { name: "Ivan", isAdmin: false };

const person = new Object({ name: "Ivan", isAdmin: false });

// class Person {
//   constructor(name, isAdmin) {
//     this.name = name;
//     this.isAdmin = isAdmin;
//   }
// }
// const person = new Person("Ivan", false);

// const person2 = Object.create(person, {
//   name: { value: "Viktor" },
//   isAdmin: { value: true },
// });

const person2 = {
  name: "Viktor",
  isAdmin: true,
  __proto__: person,
};

person.logInfo = function () {
  return `пользователь ${this.name} ${
    this.isAdmin ? "" : "не"
  } является админом`;
};

console.log(person, person2, person2.__proto__);
console.log(person2.logInfo(), "\n", person.logInfo());

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от
// класса Person.

class Person {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
  logInfo() {
    console.log(
      `пользователь ${this.name} ${this.isAdmin ? "" : "не"} является админом`
    );
  }
}

class PersonThree extends Person {
  constructor(name, isAdmin) {
    super(name, isAdmin);
  }
  get name() {
    return super.name;
  }
  set name(str) {
    super.name = str;
  }
  defineAdmin(value) {
    this.isAdmin = value;
  }
  logInfo() {
    this.defineAdmin(true);
    super.logInfo();
  }
}

const person3 = new PersonThree("Oleg");
person3.logInfo();

// Bonus - 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;

const firstSum = (arr, totalValue = total) => {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;

  while (left < right) {
    sum = arr[left] + arr[right];

    if (sum === totalValue) break;
    sum > totalValue ? right-- : left++;
  }
  return [arr[left], arr[right]];
};

console.log(firstSum(arr)); // [4,9] Сложность алгоритма - O(N)
