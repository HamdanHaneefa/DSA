
function binarySearch(arr,low,high,target){

    if(low > high){
        return
    }

    const mid = Math.floor( (low + high) / 2 )
    if(arr[mid] == target){
        return console.log(target ,'found at index ',mid)
    }
    else if(arr[mid] < target){
        binarySearch(arr,mid+1,high,target)
    }
    else{
        binarySearch(arr,low,mid-1,target)
    }


}

let arr = [1,2,3,4,5,6,7,8,9]
binarySearch(arr,0,arr.length-1,2)