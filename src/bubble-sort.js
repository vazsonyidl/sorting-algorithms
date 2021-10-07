function bubbleSort(_array) {
  const array = _array;
  for (let i = 0; i < array.length - 1; i++)
    for (let j = 0; j < array.length - i; j++)
      if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];

  return array;
}

const length = 200000;
const array = Array.from({length}, (v, i) => length - i);

let start = process.hrtime();
bubbleSort(array);
let stop = process.hrtime(start)

console.log(`Time Taken to execute: ${(stop[0] * 1e9 + stop[1])/1e9} seconds`)
