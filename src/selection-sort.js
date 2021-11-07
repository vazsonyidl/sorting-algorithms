function selectionSort(array) {
  const elements = [...array];
  for (let i = 0; i < elements.length; i++) {
    let smallestIndex = i;
    for(let j = i + 1; j < elements.length; j++) if(elements[j] < elements[smallestIndex]) smallestIndex = j;

    if(smallestIndex !== i) [elements[i], elements[smallestIndex]] = [elements[smallestIndex], elements[i]]
  }

  return elements;
}

const length = 200000;
const array = Array.from({length}, (v, i) => length - i);

let start = process.hrtime();
selectionSort(array);
let stop = process.hrtime(start)

console.log(`Time Taken to execute: ${(stop[0] * 1e9 + stop[1])/1e9} seconds`)

