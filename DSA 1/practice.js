class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    add(element){
        const newNode = new Node(element)
        if(!this.head){
            this.head = newNode
            this.size++
            return
        }
        let current = this.head

        while(current.next){
            current = current.next
        }

        current.next = newNode
        this.size++
    }

    addFirst(element){
        const newNode = new Node(element)
        newNode.next = this.head
        this.head = newNode
    }

    addLast(element){
        const newNode = new Node(element)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    addAtIndex(index,element){
        if(index < 0 || index > this.size){
            console.log("Envalid Index")
            return
        }

        if(index === 0){
            this.addFirst(element)
            this.size++
            return
        }

        const newNode = new Node(element)
        let current = this.head
        let count = 0;

        while(count < index-1){
            current = current.next
            count++
        }
        
        newNode.next = current.next
        current.next = newNode
        this.size++
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            console.log('Invalid Index')
            return
        }
        let removedNode
        if(index == 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
    }

    reverse(){
        if(!this.head){
            return
        }
        let prev = null
        let current = this.head 
        let next = null

        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev        
    }

    printList(){
        if(!this.head){
            console.log("No data in this list")
            return
        }
        let elements = ""
        let current = this.head
        while(current){
            elements += ( `${current.element} `);
            current = current.next
        }
        console.log(elements)
        console.log(this.size)
    }
}

let list = new LinkedList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.printList()

// list.addAtIndex(1,20)
// list.removeFrom(2)
// list.removeFrom(0)

// list.reverse()
// list.printList()