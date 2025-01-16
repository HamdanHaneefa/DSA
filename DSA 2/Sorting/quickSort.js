

// function quickSort(arr){
//     if(arr.length <= 0){
//         return arr
//     }

//     let pivot = arr[0]
//     let left = []
//     let right = []

//     for(let i = 1; i < arr.length;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]

// }
// let arr = [3,2,6,7,8,1,35,2]
// console.log(quickSort(arr))



// function quickSort(arr){

//     if(arr.length == 0){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=1;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [10,22,3,4,12,8,3,6,9]

// console.log(quickSort(arr));




// DEBUG

// function quickSort(arr){
//     if(arr.length < 2){
//         return console.log(arr)
//     }

//     const pivot = arr[arr.length-1]
//     const left = []
//     const right = []

//     for(let i=0;i<arr.length-1;i++){
//         if( arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]

// }

// let arr = [5,4,3,2,1]

// quickSort(arr)


