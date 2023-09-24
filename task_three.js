function getNumber(numOne = prompt('Введите число')){

    numOne = Number(numOne)
  
    return function(numTwo = prompt('Введите число')){
  
      numTwo = Number(numTwo)
      return numOne + numTwo
  
    }
  }
  
  let a = getNumber()
  console.log(a())
  