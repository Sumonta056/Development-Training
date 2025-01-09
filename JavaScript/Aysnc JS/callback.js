/*
  JavaScript Callback :
  * I will call you later after finish
  * Callback is a function passed as an arguement to another function
  * A function calling another function
*/

// Question : Call a calculator function, save the result and then show result

function calculator(number1, number2) {
    return number1 + number2;
  }
  
  function showResult(value) {
    console.log(value);
  }
  
  let ans = calculator(10, 10);
  showResult(ans);
  
  /*
    ! What's the Issue?
    * I need to call function two times and a variable to store the value
    ? That's why we need callback() to improve this
  */
  
  
  function calculatorNew(number1, number2, callback) {
    let sum = number1 + number2;
    if (callback) callback(sum);
    /*
    * Now calculator can decide whether to use callback or not
    * Function having another function as arguement
    */
  }
  
  function showResultNew(value) {
    console.log(value);
  }
  
  calculatorNew(10, 10, showResult);
  