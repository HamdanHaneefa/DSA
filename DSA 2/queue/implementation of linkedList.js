
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }

}


class LinkedListQueue{
    constructor(){
        this.front = null 
        this.rear = null
        this.size = 0
    }


    enqueue(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.rear = this.front = newNode
            this.size++
        } else{
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return
        }

        this.front = this.front.next
        if(!this.front){
            this.rear = null
        }
        this.size--
    }


    isEmpty(){
        return this.size === 0
    }

    print(){
        let current = this.front
        const element = []
        while(current){
            element.push(current.data)
            current = current.next
        }

        console.log(element.join(" -> "))
    }
}


const queue = new LinkedListQueue()

queue.enqueue(10)
queue.enqueue(20)
queue.dequeue()
queue.print()