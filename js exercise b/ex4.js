function sumInput() {
    let numbers = [];
    
    while (true) {
      let number = prompt('Enter a number:');
      if (number === null || number === '') {
        break;
      }
      
      numbers.push(Number(number));
    }
    let sum = numbers.reduce(function (acc, num) {
      return acc + num;
    }, 0);
    return sum;
  }

  let result = sumInput();
  console.log(result);

  