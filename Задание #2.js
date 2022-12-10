/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */

function simpleСomposite(number) {
    if (number < 2 || number > 1000 || isNaN(number)){
      return 'Данные неверны';
    }
    else if (number === 2) {
      return 'Простое число';
    }
    let i = 2;
    const limit = Math.sqrt(number);
    while (i <= limit) {
      if (number % i === 0) {
        return 'Составное число';
      }
      i++;
    }
    return 'Простое число';
  };
  
  console.log(simpleСomposite(3));