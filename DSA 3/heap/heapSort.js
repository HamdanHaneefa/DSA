




function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = n - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root (max) to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
 
        // Call heapify on reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Test
let arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
heapSort(arr);
console.log("Sorted array:", arr);