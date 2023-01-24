// ****[Можно ли "перевыполнить" промис?](https://learn.javascript.ru/promise-basics#mozhno-li-perevypolnit-promis)****

// Что выведет код ниже?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// сработает первый resolve (успех), Промис отретёрнит результат "1" и выйдет из Промиса, поэтому код ниже не выполнится и setTimout не сработает
