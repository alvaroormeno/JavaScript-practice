// Bubble Sort Algorythm -> Algorythm that can grab an array of numbers and return the same set of numbers but in order from smaller to bigger.

// Note: We need 2 for loops. One to itterate throught the whole array and a second one that for each itteration of the first, will itterate and compare all the numbers with their right adjacent number and flip them if necessary.

function bubbleSort(array) {
	// FOR LOOP 1 -> 
  // - The number of itterartions we need is the length of the array -1 because we dont have to itterate the last number in the array.
	for (let i = 0; i < array.length - 1; i++) {

    // FOR LOOP 2 -> 
    // - Will start from beginning and gp up comparing each number to its adjacent number in the right. 
    // - We also want it to itterate only until the second to last number, hence array.length -1, because the last number doesnt have an adjacent number to the right. 
		// - We add -i after array.lenth -1 becuse on second itteration of FOR LOOP 1, when i is 1, it will stop comparing in the third to last and so fourth.
		for (let j = 0; j < array.length - 1 - i; j++) {
			// Compare current number with next one ->
      // If array number 0 is bigger than array number 1, then...
			if (array[j] > array[j + 1]) {

				// FLIP THEM OPTION 1
				// const temp = array[j];
				// array[j] = array[j + 1];
				// array[j + 1] = temp;

        // FLIP THEM OPTION 2
				[array[j], array[j+1]] = [array[j+1], array[j]]
			};
		};
	};
	return array;
};

const randomArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,];

console.log(bubbleSort(randomArray));
