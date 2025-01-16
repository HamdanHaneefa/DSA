

// class stackUsingQueue {
//     constructor() {
//         this.q1 = []
//         this.q2 = []
//     }

//     push(element) {
//         this.q2.push(element)
//         while (this.q1.length > 0) {
//             this.q2.push(this.q1.shift())
//         }
//         [this.q1, this.q2] = [this.q2, this.q1]
//     }

//     print(){
//         console.log(this.q1)
//     }

// }

// const stack = new stackUsingQueue()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.print()



class stackUsingQueue{
    constructor(){
        this.q1 = []
        this.q2 = []
    }

    push(elem){ 
        this.q2.push(elem)

        while(this.q1.length > 0){
            this.q2.push(this.q1.shift())
        }

        [this.q1,this.q2] = [this.q2,this.q1]
    }

    print(){
        console.log(this.q1)
    }
}


const stack = new stackUsingQueue()

stack.push(10)
stack.push(20)

stack.print()