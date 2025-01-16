class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}



class DoublyLinkedList{
    constructor(){
        this.head = null 
    }

    add(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }

        let current = this.head
        while(current.next){
            current =  current.next
        }
        current.next = newNode
        newNode.prev = current
        
    }


    addFirst(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

}

let list = new DoublyLinkedList()

list.add(10)
list.print()

// console.log(list)