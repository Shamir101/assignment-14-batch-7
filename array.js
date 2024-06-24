
1
let array = [1, 2, 3, 4, 5];
array.forEach(element => {
  console.log(element);
});

//No.2
let array = [1, -2, 3, -4, 5];
array.forEach(element => {
  if (element < 0) {
    console.log(element);
  }
});

//No.3
let array = [1, 2, 3, 4, 5];
let sum = array.reduce((total, value) => total + value, 0);
console.log('Sum:', sum);

//No.4
let array = [1, 2, 3, 4, 5];
let max = Math.max(...array);
let min = Math.min(...array);
console.log('Max:', max);
console.log('Min:', min);

//No.5
let array = [1, 2, 3, 4, 5];
let uniqueArray = [...new Set(array)];
uniqueArray.sort((a, b) => b - a);
let secondLargest = uniqueArray[1];
console.log('Second Largest:', secondLargest);

//No.6
//let array = [1, 2, 3, 4, 5];
let evenCount = 0;
let oddCount = 0;
array.forEach(element => {
  if (element % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
});
console.log('Even Count:', evenCount);
console.log('Odd Count:', oddCount);

//No.7
let array = [1, -2, 3, -4, 5];
let negativeCount = array.filter(element => element < 0).length;
console.log('Negative Count:', negativeCount);

//No.8
let array = [1, 2, 3, 4, 5];
let newArray = [...array];
console.log('New Array:', newArray);

//No.9
let array = [1, 2, 3, 4, 5];
array.splice(2, 0, 6); // Insert 6 at index 2
console.log(array);


//No.10
let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Remove 1 element at index 2
console.log(array);

//No.11
let array = [1, 2, 2, 3, 4, 4, 4];
let frequency = {};
array.forEach(element => {
  frequency[element] = (frequency[element] || 0) + 1;
});
console.log(frequency);

//No.12
let array = [1, 2, 2, 3, 4, 4, 4];
let uniqueElements = [...new Set(array)];
console.log(uniqueElements);

//No.13
let array = [1, 2, 2, 3, 4, 4, 4];
let elementCount = {};
let duplicateCount = 0;
array.forEach(element => {
  elementCount[element] = (elementCount[element] || 0) + 1;
});
for (let key in elementCount) {
  if (elementCount[key] > 1) {
    duplicateCount++;
  }
}
console.log('Duplicate Count:', duplicateCount);


//No.14
let array = [1, 2, 2, 3, 4, 4, 4];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray);


//No.15
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);


//No.16
let array = [1, 2, 3, 4, 5];
let reversedArray = array.slice().reverse();
console.log(reversedArray);


//No.17
let array = [1, 2, 3, 4, 5];
let evenArray = array.filter(element => element % 2 === 0);
let oddArray = array.filter(element => element % 2 !== 0);
console.log('Even Array:', evenArray);
console.log('Odd Array:', oddArray);


//No.18
let array = [1, 2, 3, 4, 5];
let elementToFind = 3;
let index = array.indexOf(elementToFind);
console.log(index !== -1 ? `Element found at index ${index}` : 'Element not found');


//No.19
let array = [5, 2, 8, 1, 4];
let ascendingArray = array.slice().sort((a, b) => a - b);
let descendingArray = array.slice().sort((a, b) => b - a);
console.log('Ascending:', ascendingArray);
console.log('Descending:', descendingArray);


//No.20
let array = [5, 2, 8, 1, 4];
let evenArray = array.filter(element => element % 2 === 0).sort((a, b) => a - b);
let oddArray = array.filter(element => element % 2 !== 0).sort((a, b) => a - b);
console.log('Even Array:', evenArray);
console.log('Odd Array:', oddArray);


//No.21
llet array = [1, 2, 3, 4, 5];
let rotations = 2;
let rotatedArray = array.slice(rotations).concat(array.slice(0, rotations));
console.log(rotatedArray);



//No.22
let array = [1, 2, 3, 4, 5];
let rotations = 2;
let rotatedArray = array.slice(-rotations).concat(array.slice(0, -rotations));
console.log(rotatedArray);



