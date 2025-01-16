class Node{
    constructor(element){
        this.element = element 
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    //Adding to Node
    add(element){
        const newNode = new Node(element);
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

    addLast(element){
        const newNode = new Node(element)
        if(!this.head){
            this.head = newNode;
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

    addAtIndex(index,element){
        if(index < 0 || index > this.size){
            console.log("Invalid Index")
            return
        }

        if(index === 0){
            this.addFirst(element)
            return
        }

        const newNode = new Node(element)
        let current = this.head
        let count = 0

        while(count < index -1){
            current = current.next
            count++
        }

        newNode.next = this.head
        current.next = newNode

    }
    
    removeFrom(index){
        if(index < 0 || index >= this.size){
            console.log("Invalid index")
            return
        }
        let removedNode
        if(index == 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0 ;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }

    }

    removeValue(value){
        if(!this.head){
            return null
        }

        if(this.head.element == value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.next && prev.next.element !== value){
                prev = prev.next
            }
            if(prev){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
            }
            return null
        }
    }

    searchValue(value){
        if(!this.head){
            return -1
        }
        let current = this.head
        let i = 0
        while(current){
            if(current.element == value){
                return i
            }
            current = current.next
            i++
        }
        return -1
    }

    reverse(){
        if(!this.head){
            return
        }

        let current = this.head
        let prev = null
        let next = null

        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        console.log(slow.element)

    }

    //Print list
    printList(){
        if(this.head == null){
            console.log("this list is empty")
            return
        }

        let current = this.head
        let elements = "";

        while(current){
            elements += ( `${current.element} `);
            current = current.next
        }

        console.log(elements);
        console.log('Size :',this.size)
    }
}

// Create a new LinkedList instance
let list = new LinkedList();

// Add elements to the linked list
list.add(10);
list.add(20)
list.add(30);
// list.addLast(40)
// list.addFirst(5)
// list.removeFrom(0)
// list.removeValue(20)

list.reverse()
list.printList()  
// list.printList()
// console.log(list.searchValue(10))

// list.findMiddle(10)