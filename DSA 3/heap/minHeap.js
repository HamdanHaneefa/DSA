

class minHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor( (index - 1) / 2 )
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

        if(left < this.heap.length && this.heap[left] < this.heap[largest]){
            largest = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[largest]){
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

        let max = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]

        if(this.heap.length > 0){
            this.heapifyDown(0)
        }

        return max
    }

    

    print(){
        console.log(this.heap)
    }
}

const heap = new minHeap()

