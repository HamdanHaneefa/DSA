
// 1.BUBBLE SORT  
// BEST CASE : O(n)
// AVERAGE CASE : O(n^2)
// WORST CASE :  O(n^2)
// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([5,4,3,2,1]))
 

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp 
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return console.log(arr)
// }


// bubbleSort([5,4,3,2,1])


// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp
//         for(let j=0;j<arr.length - 1 ;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return console.log(arr)
// }

// bubbleSort([100,75,50,25,10,5])



// 2.INSERTION SORT
// BEST CASE : O(n)
// AVERAGE CASE : O(n^2)
// WORST CASE :  O(n^2)

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let current = arr[i] 
//         let j = i-1
//         while(j >=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = current
//     }
//     return console.log(arr)
// }

// insertionSort([100,75,50,25,10,5])


// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let current = arr[i] //75
//         let j = i-1 // 0
        
//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = current
//     }

//     return console.log( arr )
// }

//  insertionSort([100,75,50,25,10,5])

// function insertionSort(arr){
//     for(let i = 0;i<arr.length;i++){
//         let current = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = current
//     }
//     return console.log(arr)
// }

// insertionSort([100,75,50,25,10,5])



// 3.SELECTION SORT
// BEST CASE : O(n^2)
// AVERAGE CASE : O(n^2)
// WORST CASE :  O(n^2)

// function selectionsSort(arr){
//     for(let i = 0;i<arr.length-1;i++){
//         let minIndex = i
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         if(minIndex !== i){
//             [arr[i],arr[minIndex]] = [arr[minIndex] , arr[i]]
//         }
//     }
//     return console.log(arr)
// }

// selectionsSort([100,75,50,25,10,5])


// function selectionsSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex = i
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         if(minIndex !== i){
//             [arr[i],arr[minIndex]] = [ arr[minIndex] , arr[i]]
//         }
//     }

//     return console.log(arr)
// }

// selectionsSort([5,4,3,2,1])


// function selectionsSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         if(minIndex !== i){
//             [arr[i],arr[minIndex]] = [ arr[minIndex],arr[i]]
//         }
//     }
//     return console.log(arr)
// }

// selectionsSort([5,4,3,2,1])


// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp
//         for(let j = 0 ;j<arr.length-1;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     } 
//     return console.log(arr)
// }

// bubbleSort([100,75,50,25,10,5])


// function insertionSort(arr){

//     for(let i=0;i<arr.length;i++){ //2
//         let current = arr[i] //50
//         let j = i-1 //1 => 100

//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = current
//     }
//     return console.log(arr)
// }

// insertionSort([100,75,50,25,10,5]) // [50,75,100 .....]



// 4. QUICKSORT

// function quickSort(arr){
//     if(arr.length == 0){
//         return arr
//     }
//     let pivot = arr[0]
//     let left = []
//     let right = []

//     for(let i=1;i<arr.length;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]

// }

// console.log(quickSort([5,4,3,2,1])) 



// 5.MERGE SORT

// function mergeSort(arr){
//     if(arr.length <= 1) return arr
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){
//     let sortedArr = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...right,...left]
// }

// console.log(mergeSort([5,4,3,2,1]))



// LAST PRACTICE 

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp
//         for(let j=0;j<arr.length;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return console.log(arr)
// }


// bubbleSort([23,31,24,11,2])


