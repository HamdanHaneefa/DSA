

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

        newNode.prev = current
        current.next = newNode
        
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
            console.log("No data");
            return
        }

        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

}

let list = new DoublyList()
list.add(10)
list.add(20)
list.add(30)

list.reverse()
list.print()


// class Node{
//     constructor(data){
//         this.prev = null
//         this.data = data
//         this.next = null
//     }
// }


// class DoublyList{
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
//         newNode.prev = this.head
//         current.next = newNode
//     }

    

//     print(){
//         if(!this.head){
//             console.log("no data")
//             return
//         }

//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }


// let list = new DoublyList()


// list.add(10)
// list.add(20)
// list.add(30)
// list.print()