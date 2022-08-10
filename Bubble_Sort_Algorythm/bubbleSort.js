function bubbleSort(array) {
	// the number of itterartions we need is the length of the array -1 because we dont have to itterate the last number.
	for (let i = 0; i < array.length - 1; i++) {
		// starts from begiining, will go up and start comparing the number adjacent to each other.
		// j will also itterate until array.length -1 because once it gets to the last one there is no need to compare.
		// we add -i becuse on second itteration, when i is 1, it will stop comparing in the second to last and so fourth.
		for (let j = 0; j < array.length - 1 - i; j++) {
			// compare current number with next one...
			if (array[j] > array[j + 1]) {

				// FLIP THEM OPTION 1
				// const temp = array[j];
				// array[j] = array[j + 1];
				// array[j + 1] = temp;

        // FLIP THEM OPTION 2
				[array[j], array[j+1]] = [array[j+1], array[j]]


			}
		}
	}

	return array;
}

console.log(
	bubbleSort([
		1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
	])
);
