function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
		//find the middle of the list
        if (list[mid] === element) {
            return mid; //Return index of element
        } else if (list[mid] < element) {
            left = mid + 1;
        } else if (list[mid] > element) {
            right = mid - 1;
        }
    }
    return -1;	//Element not found
}
