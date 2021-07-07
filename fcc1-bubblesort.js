function bubbleSort(array) {
  let ordered = false;
  while(!ordered){
    let changed = false
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i+1]){
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        changed = true;
      }
    }
    if (!changed){
      ordered = true;
    }
  }
  return array;
}

const sorted = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(sorted);
console.log("Hello Youtrack!")