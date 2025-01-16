
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     add(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//             return
//         }
//         let current = this.head
//         while(current.next){
//             current = current.next
//         }
//         current.next = newNode
//     }

//    reverse(){
//         if(!this.head){
//             return
//         }

//         let current = this.head
//         let next = null
//         let prev = null

//         while(current){
//             // Store next
//             next = current.next
//             // Reverse current node's next pointer
//             current.next = prev
//             // Move pointers one position ahead
//             prev = current
//             current = next
//         }
//         this.head = prev
//    }

//     print(){
//         if(!this.head){
//             console.log("no data");
//             return
//         }

//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// let list = new LinkedList()

// list.add(10)
// list.add(20)
// list.add(30)

// list.reverse()
// list.print()





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
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head

            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    middle(){
        if(!this.head){
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


let list = new sLinkedList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)

list.middle()
list.print()