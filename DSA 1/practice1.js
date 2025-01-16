class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}



class sLinkedList{
    constructor(){
        this.head = null,
        this.size = 0
    }

    add(data){
        const newNode = new Node(data)
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

    addAtIndex(index,data){
        if(index < 0 || index > this.size){
            console.log("Invalid index")
            return
        }
        const newNode = new Node(data)
        let current = this.head
        if(index == 0){
            newNode.next = current
            this.head = newNode
        }
        let count = 0

        while(count < index-1){
            current = current.next
            count++
        }
        newNode.next = current.next
        current.next = newNode
    }

    deleteAtFirst(){
        if(!this.head){
            console.log("no data available")
            return
        }
        this.head = this.head.next
        this.size--
    }

    deleteAtLast(){
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null
        this.size--
    }

    deleteAt(index){
        if(!this.head){
            console.log('No data available')
            return
        }
        if(index == 0){
            this.head = this.head.next
            this.size--
            return
        }
        if(index < 0 || index > this.size-1){
            console.log('Invalid index')
            return
        }

        let current = this.head
        let count = 0

        while(count < index - 1){
            current = current.next
            count++
        }
        current.next = current.next.next
        this.size--
    }

    middle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow ? slow.data : null
    }

    removeOdd(){  
        if(!this.head){
            console.log("No data available")
            return
        }

        let current = this.head
        let prev = null

        while(current){
            if(current.data % 2 != 0){

                if(prev){
                    prev.next = current.next
                }else{
                    this.head = current.next
                }

            }else{
                prev = current
            }
            
            current = current.next
        }
    }

    print(){
        if(!this.head){
            console.log('No elements in this list')
            return
        }
        let current = this.head
        let elements = ""
        while(current){
            elements += ( `${current.data} `);
            current = current.next
        }
        console.log(elements)
        // console.log(this.size)
    }
}

let list = new sLinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)


// list.addAtIndex(5,40)
// list.deleteAtFirst()
// list.deleteAtLast()
// console.log(list.middle())
// list.deleteAt(1)
list.print()
list.removeOdd()
list.print()
