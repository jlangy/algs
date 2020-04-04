//Iterates through array, puts minimum at the front. Continues with i+1, end of arrray 
function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    let min = array[i];
    let minIndex = i;
    for(let j = i; j < array.length; j++){
      if(array[j] < min){
        min = array[j];
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = min;
    array[minIndex] = temp;
  }
  return array;
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));