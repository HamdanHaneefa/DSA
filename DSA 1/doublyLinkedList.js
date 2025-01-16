


class Node{
    constructor(data){
        this.prev = null
        this.data = data
        this.next = null
    }
}


class DoublyList{
    constructor(){
        this.head = null
    }


    addFirst(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    addLast(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            newNode.prev = this.head
            current.next = newNode  
        }
    }


    add(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
        newNode.prev = current; 
    }

    reverse(){
        if(!this.head){
            return
        }

        let current = this.head
        let temp = null

        while(current){
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }
        if(temp){
            this.head = temp.prev
        }
    }

    print(){
        if(!this.head){
            console.log("No data")
            return
        }

        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}


let list = new DoublyList()

// list.addFirst(10)
// list.addFirst(20)
list.add(10)
list.add(20)
list.add(30)
list.add(40)

list.reverse()

list.print()