// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     leftChild(index){
//         return 2 * index + 1
//     }

//     rightChild(index){
//         return 2 * index + 2
//     }

//     parent(index){
//         return Math.floor((index - 1) / 2)  
//     }

//     swap(i,j){
//         const temp = this.heap[i]
//         this.heap[i] = this.heap[j]
//         this.heap[j] = temp
//     }

//     heapifyUp(index){
//         let parentIndex = this.parent(index)
//         while(index > 0 && this.heap[index] > this.heap[parentIndex]){
//             this.swap(index,parentIndex);
//             parentIndex = this.parent(index)
//         }
//     }


//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }


//     printHeap() {
//         console.log(this.heap);
//       }

// }


// const maxHeap = new MaxHeap()

// maxHeap.insert(10)
// maxHeap.insert(15)
// maxHeap.insert(5)
// maxHeap.insert(3)
// maxHeap.insert(7)

// maxHeap.printHeap()



class MaxHeap{
    constructor(){
        this.heap = []
        this.sorted = []
    }

    getParentIndex(index){
        return Math.floor( (index - 1 ) / 2 );
    }

    getLeftIndex(index){
        return 2 * index + 1
    }

    getRightIndex(index){
        return 2 * index + 2
    }

    swap(index,parentIndex){
        [this.heap[parentIndex] , this.heap[index]] =
        [this.heap[index] , this.heap[parentIndex]] 
    }


    heapifyUp(index){
        while(index > 0){
            const parentIndex = this.getParentIndex(index)
            if(this.heap[parentIndex] > this.heap[index]){
                break
            }

            this.swap(index,parentIndex)
            index = parentIndex
        }
    }

    heapifyDown(index){
        let largest = index
        let left = this.getLeftIndex(index)
        let right = this.getRightIndex(index)

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left
        }

        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right
        }

        if(largest !== index){
            this.swap(index,largest)
            this.heapifyDown(largest)
        }

    }


    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length -1)
    }

    delete(){
        if(this.heap.length == 0){
            return null
        }

        const max = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]

        if(this.heap.length > 0){
            this.heapifyDown(0)
        }
        this.sorted.push(max)
        return max
    }

    
    print(){
        // console.log(this.heap)
        console.log(this.sorted)
        return
    }
}


const heap = new MaxHeap()

heap.insert(10)
heap.insert(50)
heap.insert(20)


