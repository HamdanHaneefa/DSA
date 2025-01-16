

// function mergeSort(arr) {

//     if (arr.length <= 1) return arr

//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left, right)
// }

// function merge(left, right) {
//     console.log(left, 'left', right, 'right');
//     let sortedArr = []

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sortedArr.push(left.shift())
//         } else {
//             sortedArr.push(right.shift())
//         }
//     }

//     return [...sortedArr, ...left, ...right]

// }

// let arr = [82, 17, 6, 5, 214, 3, 1004, 1]

// console.log(mergeSort(arr))




function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right  = mergeSort(arr.slice(mid))

    return merge(left,right)    
}

function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...right,...left]
}


let arr = [3,2,4,1]
console.log(mergeSort(arr));



arr.reverse()