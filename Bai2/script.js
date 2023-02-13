const add = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let regex = /^\d+(\.\d+)?$/;
    if(regex.test(num1) && regex.test(num2)) {
      let result = Math.round((num1 + num2) * 100000) / 100000
    document.getElementById("result").innerHTML =  `Tổng của ${num1} + ${num2} là ${result}`;
    }
    else{
      document.getElementById("result").innerHTML =  `Vui lòng nhập số`;
    }
    
  }