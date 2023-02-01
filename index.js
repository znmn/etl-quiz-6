function solve(arr, arrStart = 0, arrMid = arr.length - 11, arrEnd = 0) {
	if (arrStart > arr.length - 1) return;

	const start = arr[arrStart],
		mid = arr[arrMid],
		end = arr[arrEnd];

	console.log(`${start} -> ${mid} -> ${end}`);
	if (start < mid && start <= 6) {
		solve(arr, arrStart + 1, arrMid - 1, arrEnd + 1);
	} else if (start > end) {
		solve(arr, arrStart + 1, arrMid - 1, arrEnd - 1);
	} else if (mid == 5) {
		solve(arr, 10, 19, 9);
	}
}

const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
solve(arr);
