function copySorted(arr) {
    let sortedCopy1 = arr.slice();

    sortedCopy1.sort();

    return sortedCopy1;
}  
let originalArray1 = ["car", "train", "helicopter", "truck"];
let sortedArray1 = copySorted(originalArray1);
  
  console.log(originalArray1); 
  console.log(sortedArray1);  