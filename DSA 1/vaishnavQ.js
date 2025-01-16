// Delete the middle + 1 eg: 8,9,10,11,12 delete 11



class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
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

    deletAfterMiddle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        // console.log(slow)
        slow.next = slow.next.next
    }

    deleteBeforeMiddle(){
        let slow = this.head
        let fast = this.head
        let prev =null
        let bPrev = null
        while(fast && fast.next){    
            bPrev = prev
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        bPrev.next = slow
    }

    deleteValue(data){
        if(this.head.data == data){
            this.head = this.head.next
            return
        }

        let current = this.head
        while(current && current.data !== data){
            current = current.next
        }

        console.log(current)
        if(current){
            current
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
        console.log(this.size)
    }

}


let list = new LinkedList()

list.add(7)
list.add(8)
list.add(9)
list.add(10)
list.add(11)
list.add(12)

// list.print()
// list.deleteBeforeMiddle() 
// list.print()
list.deleteValue(10)