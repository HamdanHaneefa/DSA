
// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return console.log(this.table[index]);
//     }

//     remove(key){
//         const index = this.hash(key)
//         return this.table[index] = undefined
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }

// const table = new HashTable(50)

// table.set("name","hamdan")
// table.set("age",100)
// table.set("test1","tested1")

// table.remove("age")

// table.print()




//Stack Implementation of Array

// class Stack{
//     constructor(maxsize){
//         this.items = [];
//         this.size = 0
//         this.maxsize = maxsize
//     }

//     push(data){
//         if(this.size < this.maxsize){
//            this.items.push(data)
//            this.size++ 
//         }else{
//             console.log("Stack overflow ! Cannot push")
//         }    
//     }

//     pop(){
//         if(this.items.length === 0){
//             return console.log("Stack Underflow ! Cannot delete")
//         }else{
//             this.items.pop()
//             this.size--
//         }
//     }

//     peek(){
//         if(this.items.length == 0){
//             console.log("No data")
//         }else{
//             return console.log(this.items[this.items.length-1])
//         }
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const stack = new Stack(4)
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.peek()
// stack.print()


 // Implementation of Stack by LinkedList
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     push(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }

//     pop(){
//         if(!this.head){
//             console.log("Stack Underflow!")
//         }else{
//             this.head = this.head.next
//         }

//     }

//     reverse(string){
//         const splited = string.split('')
//         console.log(splited)
    


//     }

//     print(){
//         if(!this.head){
//             return console.log("No data")
//         }

//         let current = this.head
//         let result = ""
//         while(current){
//             result += current.data + " "
//             current = current.next
//         }
//         console.log(result)
//     }
// }


// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.reverse('hello world')



// function reverse(string){
//     const splited = string.split(' ')
//     const stack = [];
//     for(words of splited){
//         stack.push(words)
//     }
//     let finals = ''

//     while(stack.length){
//         finals += stack.pop() +" "
//     }
//     console.log(finals)

// }


// reverse('Sky is blue')




// QUEUE Implementation using Array

// class Queue{
//     constructor(){
//         this.items = []
//         this.size = 0
//     }

//     enqueue(data){
//         this.items.push(data)
//     }

//     dequeue(){
//         this.items.shift()
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.dequeue()

// queue.print()




// Queue Implementation using Linkedlist 

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }


// class LinkedListQueue{
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     enqueue(data){
//         const newNode = new Node(data)
//         if(this.size == 0){
//             this.front = this.rear = newNode
//             this.size++
//         }else{
//            this.rear.next = newNode
//            this.rear = newNode
//            this.size++
//         }

//     }

//     dequeue(){
//         if(this.size == 0){
//             console.log("Queue is empty")
//             return
//         }

//         this.front = this.front.next
//         if(!this.front){
//             this.rear = null
//         }
//         this.size--
//     }

//     print(){
//         let current = this.front
//         let result = ''
//         while(current){
//             result += current.data + " "
//             current = current.next
//         }
//         console.log(result)
//     }
// }

// const queue = new LinkedListQueue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.dequeue()
// queue.dequeue()
// queue.dequeue()

// queue.print()


// Implementation of stack using queue

// class stackUsingQueue{
//     constructor(){
//         this.q1 = []
//         this.q2 = []
//     }

//     push(data){
//         this.q2.push(data)

//         while(this.q1.length > 0){
//             this.q2.push(this.q1.shift())
//         }

//         [this.q1,this.q2] = [this.q2,this.q1] 
//     }

//     pop(){
//         if(this.q1.length == 0){
//             return console.log("Stack is empty")
//         }

//         return this.q1.shift()
//     }

//     print(){
//         console.log(this.q1)
//     }

// }

// const stack = new stackUsingQueue()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)

// stack.pop()
// stack.print()



// let map = new Map()

// map.set("name","haneefa")
// map.set("age","19")

// console.log(map.has("haneefa"))


//Stack with array Implementation

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         if(this.items.length == 0){
//             return console.log("Stack Underflow!")
//         }
//         this.items.pop()
//     }

//     middle(){
//         if(this.items.length === 0){
//             return console.log(this.items[0])
//         }
//         const midIndex = Math.floor( this.items.length / 2 )
//         console.log(this.items[midIndex])
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// // stack.pop()
// stack.print()
// stack.middle()

// Valid Paranthesis

// function valid(s){
//     const stack = []
//     const brackets = {
//         "}" : "{",
//         "]" : "[",
//         ")" : "("
//     }
//     for(i of s){
//         if(i=="{" || i == "[" || i == "("){
//             stack.push(i)
//         }else if(i=="}" || i == "]" || i == ')'){
//             if(stack.pop() !== brackets[i]){
//                return false 
//             }         
//         }
//     }

//     return stack.length == 0

// }

// console.log(valid("{[()]}"))



// Quick Sort 

// function quickSort(arr){
//     if(arr.length == 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []

//     for(let i = 1;i<arr.length;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [8,2,1,5,2,3,20,24]

// console.log(quickSort(arr))



// Merge Sort 

// function mergeSort(arr){
//     if(arr.length <=1) return arr
   
//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){
//     let sortedArr = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }

//     return [...sortedArr,...left,...right]
// }

// console.log(mergeSort([7,3,12,9,3,2,1,8]))

// let arr = [1,1,2,2,3,3,4,4,5,6]
// let map = {}

// for(let i of arr){
//     if(map[i]){
//         map[i]++
//     }else{
//         map[i] = 1
//     }
// }
// for(let i in map){
//     if(map[i]==1){
//         console.log(i)
//     }
// }

// // console.log(map)



// class HashTable{
//     constructor(size){
//         this.table = []
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }


// const table = new HashTable(20)

// table.set("name","hamdan")


// table.remove("name")
// table.print()




