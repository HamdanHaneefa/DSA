
let arr = [4,3,2,1]

function bubbleSort(arr) {
    let temp
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }

    }

   return console.log(arr)
}

bubbleSort(arr)




// const bubbleSort = (arr) => {
//     let n = arr.length

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {

//             if(arr[j] > arr[j+1]){
//                 [ arr[j] , arr[j+1] ] = [arr[j+1] ,arr[j]]
//             }

//         }
//     }

//     return console.log(arr);
     
// }

// let arr = [4,3,2,1]
// bubbleSort(arr)