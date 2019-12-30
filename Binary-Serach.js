function binary_serach(arr, x, index){
	let len = arr.length;
	let mid = Math.floor(len/2)
	if(arr.length === 0){
		return -1
	}
	if(x == arr[mid]){
		return index + mid;
	}
	else if(x < arr[mid]){
		let new_arr = arr.slice(0, mid);
		return binary_serach(new_arr, x, index);
	}
	else if(x > arr[mid]){
		let new_arr = arr.slice(mid+1, len);
		index = index + mid + 1;
		return binary_serach(new_arr, x, index);
	}
}

let sorted_arr = [1,2,3,3,3,4,4,6,9,10]
let res = binary_serach(sorted_arr, -1, 0)
console.log(res)