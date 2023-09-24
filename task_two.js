let num = prompt('Введите простое число до 1000: ')

num = Number(num)
function isPrime(num) {
  if (num > 1000){
    return 'до 1000...'
  }else if (num == 0){
    return '0 нельзя'
  }else if (num == 1){
    return '1 нельзя'
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 'число не является простым';
  }
  return 'число является простым';
}

console.log(isPrime(num))