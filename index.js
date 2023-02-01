function solve(arr, arrStart = 0, arrMid = arr.length - 11, arrEnd = 0) {
	const arrHalf = Math.ceil((arr.length - 1) / 2 / 2),
		half = arr[arrHalf],
		start = arr[arrStart],
		mid = arr[arrMid],
		end = arr[arrEnd];

	if (arrStart > arr.length - 1 || (start != end && start > mid)) return;
	console.log(`${start} -> ${mid} -> ${end}`);

	if (start < mid && start <= half + 1) {
		solve(arr, arrStart + 1, arrMid - 1, arrEnd + 1);
	} else if (start > end) {
		solve(arr, arrStart + 1, arrMid - 1, arrEnd - 1);
	} else if (mid == half) {
		solve(arr, arrStart + 6, arrMid + 14, arrEnd + 5);
	}
}
const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
solve(arr);
