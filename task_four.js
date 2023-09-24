function subsequenceNumberLog(min, max){
    let count = min
  
    let timerId = setInterval(function(){
      console.log(count)
      if (count == max){
        clearInterval(timerId)
      }
      count++
    }, 1000)
  }
  
  subsequenceNumberLog(5, 15)