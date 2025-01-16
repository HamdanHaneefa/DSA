
// Implementation Using an Array

// class Stack{
//     constructor(){
//         this.items = []
//         this.size = 0
//     }

//     push(element){
//         this.items.push(element)
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return "stack is empty"
//         }
//         this.items.pop()
//         this.size--
//     }

//     peek(){
//         if(this.isEmpty()){
//             return "stack is empty"
//         }
//         return console.log( this.items[this.items.length - 1] );
        
//     }
    
//     isEmpty(){
//         return this.items.length === 0;
//     }

//     clear(){
//         this.items = [] ;
//         this.size = 0
//     }

//     print(){
//         let current = this.items
//         let i = 0
//         while(i<this.size){
//             console.log(current[i])
//             i++ 
//         }

//     }
// }

// let stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
 
// // stack.peek()
// stack.clear()
// stack.print()




// Implementation Using an LinkedList


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class StackLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }


    push(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    pop(){
        if(!this.head){
            return console.log("Stack Underflow: Stack is empty.");
        }

        this.head = this.head.next
        this.size--
        
    }

    peek(){
        if(!this.head){
            return console.log("No data exist..")
        }

        return console.log(this.head.data);

    }

    findMiddle(){
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return console.log(slow.data)
    }

    deleteMiddle(){
        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        if(prev){
            prev.next = slow.next
        }

    }

    reverse() {
        if (!this.head) {
            console.log("No data");
            return;
        }
    
        let prev = null;
        let current = this.head;
        let next = null;
    
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;     
            current = next;     
        }
        this.head = prev; 
    }
    

    print(){
        if(!this.head){
            console.log("No data exist..")
            return
        }
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    clear(){
        this.head = null
        this.size = 0
    }
}


let stack = new StackLinkedList()

stack.push('helo')
stack.push('how')
stack.push('you')

// stack.pop()
// stack.peek()
// stack.clear()
// stack.deleteMiddle()
// stack.reverse() 
stack.print()