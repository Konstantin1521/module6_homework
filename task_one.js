let arr = [1, 4, 7, 8, 12, 22, null, 0, 'qwe', 0, 'qwe', 0, 'qwe',2 ,2 ,2 ,2, 2, 2,]

let arr2 = [2, 4 ,5 ,5 ,5 ,5 ,5 ,5, 0, 0, 0, 0, 0, 0,]

function numberFilter(arr=[]){

    let counEven = 0 
    let counOdd = 0 
    let countIndefinite = 0 

    for(let i of arr){
  
        if(i == null || i == 0 || typeof i != "number"){
              countIndefinite++
        }
        else if (i % 2 == 0){
              counEven++
          }else if(i % 2 != 0){
              counOdd++
          }
      
      }

    console.log('четных: ' + counEven)
    console.log('Нечетных: ' + counOdd)
    console.log('неопределенные или ноль: ' + countIndefinite)
}