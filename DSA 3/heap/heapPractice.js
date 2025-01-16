

// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return Math.floor( (index - 1) / 2 )
//     }

//     getLeftIndex(index){
//         return 2 * index + 1
//     }
    
//     getRightIndex(index){
//         return 2 * index + 2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         while(index > 0){
//             const parentIndex = this.getParentIndex(index)
            
//             if(this.heap[parentIndex] > this.heap[index]){
//                 break
//             }

//             this.swap(index,parentIndex)
//             index = parentIndex
//         }
//     }

//     heapifyDown(index){
//         let largest = index
//         let left = this.getLeftIndex(index)
//         let right = this.getRightIndex(index)

//         if(left < this.heap.length && this.heap[left] > this.heap[largest]){
//             largest = left
//         }

//         if(right < this.heap.length && this.heap[right] > this.heap[largest]){
//             largest = right
//         }

//         if(largest !== index){
//             this.swap(index,largest)
//             this.heapifyDown(largest)
//         }
//     }


//     delete(){
//         if(this.heap.length == 0){
//             return null
//         }
        
//         const max = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]
//         this.heap.pop()

//         if(this.heap.length > 0){
//             this.heapifyDown(0)
//         }
//     }


//     swap(index,parentIndex){
//        [ this.heap[parentIndex],this.heap[index] ] =
//         [this.heap[index] , this.heap[parentIndex]]
//     }


//     print(){
//         console.log(this.heap)
//         return
//     }
// }



// const heap = new MaxHeap()

// heap.insert(10)
// heap.insert(5)
// heap.insert(15)
// heap.insert(3)

// heap.delete()

// heap.print()




// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return Math.floor( (index - 1) / 2 )
//     }

//     getLeftIndex(index){
//         return 2 * index + 1
//     }

//     getRightIndex(index){
//         return 2 * index + 2
//     }

//     swap(index,parentIndex){
//         [this.heap[index],this.heap[parentIndex]] =
//         [this.heap[parentIndex],this.heap[index]]
//     }

//     heapifyUp(index){
//         while(index > 0){
//             const parentIndex = this.getParentIndex(index)

//             if(this.heap[parentIndex] < this.heap[index]){
//                 break
//             }

//             this.swap(index,parentIndex)
//             index = parentIndex
//         }
//     }

//     heapifyDown(index){
//         let largest = index
//         let left = this.getLeftIndex(index)
//         let right = this.getRightIndex(index)

//         while(index > 0){
//             if(left.length > index && this.heap[left] < this.heap[largest]){
//                 left = largest
//             }

//             if(right.length > index && this.heap[right] < this.heap[largest]){
//                 right = largest
//             }

//             if(index !== largest){
//                 this.swap(index,largest)
//                 this.heapifyDown(largest)
//             }
//         }
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     delete(){
//         if(this.heap.length == 0){
//             return null
//         }

//         const max = this.heap[0]
        
//         this.heap[0] = this.heap[this.heap.length-1]
//         this.heap.pop()

//         if(this.heap.length > 0){
//             this.heapifyDown(0)
//         }
//     }

//     print(){
//         console.log(this.heap)
//         return
//     }
// }


// const heap = new MinHeap()

// heap.insert(10)
// heap.insert(5)
// heap.insert(3)
// heap.insert(7)

// heap.delete()

// heap.print()



class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeftIndex(index){
        return 2 * index + 1
    }

    getRightIndex(index){
        return 2 * index + 2
    }

    swap(index,parentIndex){
        [this.heap[index],this.heap[parentIndex]] =
         [this.heap[parentIndex],this.heap[index]]
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
        this.heapifyUp(this.heap.length-1)
    }

    delete(){
        if(this.heap.length == 0){
            return null
        }

        const max = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]

        if(this.heap.length > 0){
            this.heapifyDown(0)
        }

        return max
    }


    print(){
        console.log(this.heap);
        return
    }

}



const heap = new MaxHeap()

heap.insert(10)
heap.insert(5)
heap.insert(15)
heap.insert(3)
heap.insert(7)

heap.delete()
heap.print()
