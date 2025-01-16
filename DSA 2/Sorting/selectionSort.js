


let arr = [4, 3, 2, 1]

function selectionsSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [ arr[minIndex],arr[i]]
        }
    }
    return console.log(arr)
}

selectionsSort([5,4,3,2,1])