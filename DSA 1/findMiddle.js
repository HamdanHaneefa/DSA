

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    add(data){
        const newNode = new Node(data);
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

    findMiddle(){
        if(!this.head){
            console.log('No data exist')
            return
        }
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        prev.next = slow.next
    
        return slow ? console.log('Middle one :',slow) : null
    } 

    deleteDuplicate(){
        if(!this.head){
            console.log("No data exist")
            return
        }
        let current = this.head
        let seen = new Set()
        let prev = null
        while(current.next){
            if(seen.has(current.data)){
                console.log(current.next)
                break
            }else{
                seen.add(current.data)
                prev = current
            }
            current = current.next
            
        }
    }

    print(){
        if(!this.head){
            console.log("No data exists")
            return
        }
        let current = this.head
 
        let elements = ''
        while(current){
            elements += current.data + " "
            current = current.next
        }
        console.log(elements)
        
    }
}
let list = new LinkedList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.add(10)
list.add(50)
// list.findMiddle()
list.deleteDuplicate()
// list.print()
