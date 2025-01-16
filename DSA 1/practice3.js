
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class sLinkedList{
    constructor(){
        this.head = null
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
        
    }

    findMiddle(data){
        if(!this.head){
            return
        }
        let fast = this.head
        let slow = this.head
    
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        
        let newNode = new Node(data)

        
        let current = slow.next
        newNode.next = current
        slow.next = newNode
      
        
    }

    addAt(index,data){
        if(!this.head){
            return
        }
        // if(index < this.size){
        //     return
        // }
        let newNode = new Node(data)
        if(index == 0){
            newNode.next = this.head
            this.head = newNode
            return
        }

        let current = this.head
        let prev = null
        let count = 0
        while(count < index){
            prev = current
            current = current.next
            count++
        }
        
        newNode.next = prev.next
        prev.next = newNode

    }

    print(){
        if(!this.head){
            console.log("No data")
            return
        }
        let current = this.head
        let result = ''
        while(current){
            result += current.data + " "
            current = current.next
        }
        console.log(result)
    }
}

let list = new sLinkedList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)

list.addAt(0,100)  // output : 10 20 30 ->10<- 40 50
// list.findMiddle(90)
list.print()