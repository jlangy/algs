const quicksort = array => {
  if(array.length <= 1){
    return array;
  }
  let pivot = array[0];
  let low = [];
  let high = [];
  for(let i = 1; i < array.length; i++){
    if(array[i] < pivot){
      low.push(array[i])
    } else {
      high.push(array[i])
    }
  }
  return [...quicksort(low), pivot, ...quicksort(high)]
}
console.log(quicksort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))