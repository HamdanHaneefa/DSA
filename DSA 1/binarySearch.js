
// const arr = [1,2,3,4,5,6,7,8,9]
// let target = 12
// let low = 0;
// let high = arr.length -1

 
// while(low <= high){
//     const mid = Math.floor( (low+high) / 2)

//     if(arr[mid] == target){
//         return console.log(target)
//     }else if(arr[mid] < target){
//         low = mid + 1
//     }else{
//         high = mid - 1
//     }
// }




// let arr = [1,2,3,4,5,6,7,8,9]
// let low = 0;
// let high = arr.length-1
// let target = 8

// while(low <= high){
//     const mid = Math.floor((low + high) / 2)
//     if(arr[mid] == target){
//         return console.log(target,' at index of :',mid)
//     }else if(arr[mid] < high){
//         low = mid + 1
//     }else{
//         high = mid - 1
//     }
// }





// let arr = [1,2,3,4,5,6,7,8,9]

// let high = arr.length-1
// let low = 0
// let target = 8


// while(low < high){
//     const mid = Math.floor((low + high) /2)

//     if(arr[mid] == target){
//         return console.log(target , ' at index of ',mid)
//     }

//     if(arr[mid] < high){
//         low = mid +1
//     }else{
//         high = mid -1
//     }
// }


function binarySearch(arr,low,high,target){

    if(low > high){
        return
    }

    const mid = Math.floor( (low + high) / 2 )
    if(arr[mid] == target){
        return console.log(target ,'found at index ',mid)
    }
    else if(arr[mid] < target){
       return binarySearch(arr,mid+1,high,target)
    }
    else{
        return binarySearch(arr,low,mid-1,target)
    }


}

let arr = [1,2,3,4,5,6,7,8,9]
binarySearch(arr,0,arr.length-1,2)