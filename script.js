/*1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);*/

//1
const arr = [1, 5, 7, 9]
console.log(Math.min(...arr));
//2
function createCounter() {
    let count = 0
    return {
        increment: function () {
            count += 1
        },
        decrement: function () {
            count -= 1
        },
        getCount: function () {
            return count
        },
    }
}

const counter = createCounter();

console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.decrement()
console.log(counter.getCount());


//3


function findElementByClass(element, className) {
    // Проверяем, имеет ли текущий элемент искомый класс
    if (element.classList.contains(className)) {
      return element;
    }
    // Рекурсивно проверяем каждый дочерний элемент
    for (const child of element.children) {
      const found = findElementByClass(child, className);
      if (found) {
        return found;
      }
    }
    // Если элемент с искомым классом не найден, возвращаем null
    return null;
  }
  
  // Пример использования
  const rootElement = document.getElementById('root');
  const targetElement = findElementByClass(rootElement, 'my-class');
  console.log(targetElement);