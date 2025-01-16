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


      //Add to first
      addFirst(element){
        const newNode = new Node(element)
        newNode.next = this.head
        this.head = newNode
    }


    addAtIndex(index,element){
        if(index < 0 || index > this.size){
            console.log("Invalid size")
            return
        }

        if(index == 0){
            this.addFirst(element)
            return
        }
        const newNode = new Node(element)
        let current = this.head 
        let count = 0
        
        while(count < index - 1){
            current = current.next
            count++
        }
        newNode.next = this.head
        current.next = newNode
        // console.log(current)

    }

    printList(){
        if(!this.head){
            console.log("No data available on this list")
            return
        }

        let current = this.head
        let elements = "";

        while(current){
            elements += ( `${current.element} `);
            current = current.next
        }

        console.log( ` elements: ${elements} `);
        console.log( ` size: ${this.size} `);
    }
}

let list = new LinkedList()

list.add(10)
list.add(20)
list.add(40)
list.add(50)
list.addAtIndex(1,30)
list.printList()
