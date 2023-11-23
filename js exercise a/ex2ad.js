function filterRange(arr, a, b) {
    let result = arr.filter(function(element) {
      return element >= a && element <= b;
    });
  
    return result;
  }

  let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let filteredArray = filterRange(originalArray, 3, 5, 7);
  
  console.log(originalArray); 
  console.log(filteredArray);  
  