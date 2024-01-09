// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько
// структур данных? Какие ?

// Массивы в JS совмещают в себе такие структуры данных, как
// хэш-таблицы, очередь и стэк
// Массивы представляют собой частный вариант объектов, т.е. имеют пару ключ-значение:
// obj = {
//     0:1,
//     1:2,
//     2:3,
// }
// arr = [1,2,3]
// Также данные в массиве могут быть разных типов
// arr = ['sometext', 1,2,3, {name: "Ivan"}]

//2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value
//(Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);

logger.apply(obj);

const myLogger = logger.bind(obj);
myLogger();

//Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

const customBind = function (someFunc, context) {
  return function (arg) {
    return someFunc.call(context, arg);
  };
};

obj2 = { value: 20 };

const sum = function (a) {
  return this.value + a;
};

const bindedValue = customBind(sum, obj2);
console.log(bindedValue(5));

const bindedValue2 = customBind(sum, obj2);
console.log(bindedValue2(20));
console.log(bindedValue2(30));
