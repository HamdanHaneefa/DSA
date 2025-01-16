

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
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
           
            let current = this.head

            while(current.next != null){
                current = current.next
            }
            current.next = newNode
        }
    }

    deleteDuplicate(){
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head
        let seen = new Set()
        let prev = null
     
        while(current.next){
            if(seen.has(current.data)){
                prev.next = current.next
            }else{
                prev = current
                seen.add(current.data)
            }
            current = current.next
        }
    }
    print(){
        if(!this.head){
            console.log('No data available of this list')
            return
        }
        let current = this.head
        let elements = "";

        while(current){
            elements += ( `${current.data} `);
            current = current.next
        }

        console.log( ` elements: ${elements} `);
    }
}


let list = new LinkedList()

list.add(10)
list.add(10)
list.add(20)
list.add(20)
list.add(30)
list.add(40)

list.deleteDuplicate()
list.print()
