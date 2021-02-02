function findMinAndRemove(arr) {
  let min = arr[0];
  let index = 0;
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  arr.splice(index, 1);
  return min;
}

function insertionSort(arr) {
  let sorted = [];
  while(arr.length) {
    let min = findMinAndRemove(arr);
    sorted.push(min);
  } 
}





// function findMinAndRemove(array){
//   let min = array[0];
//   let minIndex = 0;

//   for(let i = 1; i < array.length; i++) {
//     if(array[i] < min) {
//       min = array[i];
//       minIndex = i;
//     }
//   }
//   array.splice(minIndex, 1);
//   return min;
// }

// function insertionSort(array){
//   let sorted = [];
//   while(array.length != 0) {
//     sorted.push(findMinAndRemove(array));
//   }
//   return sorted;
// }
