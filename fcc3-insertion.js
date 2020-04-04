//Iterates through array, inserts ith element in the correct place in array 0 -> i
function insertionSort(array) {
  for(let i = 0; i < array.length; i++){
    const currentVal = array[i];
    let index = i;
    while(index > 0){
      index--;
      if (array[index] < currentVal || index === 0){
        array = [...array.slice(0,index + 1),
                 currentVal,
                 ...array.slice(index + 1, i), 
                 ...array.slice(i+1)];
        break;
      }
    }
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));