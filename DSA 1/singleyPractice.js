
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyList{
    constructor(){
        this.head = null
        this.next = null
    }

    add(data){
        const newNode = new Node(data)
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

    addFirst(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    removeDuplicate(){

        if(!this.head){
            console.log("No data exists")
            return
        }
        let current = this.head
        let seen = new Set()
        let previous = null
        while(current){
            if(seen.has(current.data)){
               previous.next = current.next
            }else{
                seen.add(current.data)
                previous = current
            }
            current = current.next
        }
    }

    secondLargest(){
        if(!this.head){
            return
        }
        let current = this.head
        let largest = -Infinity
        let secondLargest = -Infinity

        while(current){
            if(current.data > largest){
                secondLargest = largest
                largest = current.data
            }
            else if(current.data > secondLargest && current.data !== largest){
                secondLargest = current.data
            }
            current = current.next
        }
        console.log("secondLargest largest element is :",secondLargest)
    }

    print(){
        if(!this.head){
            console.log("No data exists")
            return
        }
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}


let list = new SinglyList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.secondLargest()

// list.removeDuplicate()


// list.print()

