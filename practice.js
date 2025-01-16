
// class Node{
//     constructor(value){
//         this.left = null
//         this.value = value
//         this.right = null
//     }
// }


// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             return this.insertNode(this.root,newNode)
//         }

//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     contains(value){
//         this.containsNode(this.root,value)
//     }

//     containsNode(root,value){
//         if(root == null){
//             return console.log("No such data found")
//         }

//         if(root.value == value){
//             return console.log(value," is founded")
//         }

//         if(root.value < value){
//             this.containsNode(root.left , value)
//         }
//         else if(root.value > value){
//             this.containsNode(root.right , value)
//         }
//     }

//     findMin(root){

//     }

//     isEmpty(){
//         return this.root === null
//     }


//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.preOrder(root.left)
//             console.log(root.value)
//             this.preOrder(root.right)
//         }
//     }
// }


// const bst = new BST()

// bst.insert(10)
// bst.insert(20)
// bst.insert(30)

// // bst.preOrder(bst.root)
// bst.contains(10)





// class BST{
//     constructor(value){
//         this.left = null
//         this.value = value
//         this.right = null
//     }

//     insert(value){
//         if(value < this.value){
//             if(this.left == null){
//                 this.left = new BST(value)
//             } else{
//                 this.left.insert(value)
//             }
//         } else if(value > this.value){
//             if(this.right == null){
//                 this.right = new BST(value)
//             }else{
//                 this.right.insert(value)
//             }
//         }
//     }
// }

// const tree = new BST(10)




// class Node{
//     constructor(value){
//         this.left = null
//         this.value = value
//         this.right = null
//     }
// }


// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else if(newNode.value > root.value){
//             if(root.right == null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     preOrder(root){
//         if(root == null){
//             return false
//         }
//         console.log(root.value)
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }

//     contains(value){
//         return this.search(value,this.root)
//     }

//     search(value,root){
//         if(root == null){
//             return console.log("No data found")
//         }

//         if(root.value == value){
//             return console.log(value + " is existss!")
//         }

//         if(value < root.value){
//             this.search(value,root.left)
//         }else{
//             this.search(value,root.right)
//         }
//     }

// }


// const bst = new BST()

// bst.insert(10)
// bst.insert(20)
// bst.insert(5)
// bst.insert(30)

// // bst.preOrder(bst.root)
// bst.contains(30)


// isValidBST() {
//     const result = this.isValidBSTHelper(this.root, -Infinity, Infinity);
//     console.log(result ? "It is a valid BST" : "It is not a valid BST");
//     return result; // Return the result as well
// }

// isValidBSTHelper(root, min, max) {
//     if (root == null) {
//         return true; // The subtree is valid if it's empty
//     }

//     if (root.value <= min || root.value >= max) {
//         return false; // Violation of BST properties
//     }

//     return (
//         this.isValidBSTHelper(root.left, min, root.value) &&
//         this.isValidBSTHelper(root.right, root.value, max)
//     );
// }



// class Node{
//     constructor(value){
//         this.left = null
//         this.value = value
//         this.right = null
//     }
// }


// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }
//         else if(newNode.value > root.value){
//             if(root.right == null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     contains(value){
//         this.search(this.root,value)
//     }

//     search(root,value){
//         if(root == null){
//             console.log("No data exists")
//             return false
//         }

//         if(root.value == value){
//             console.log("data exists")
//             return true
//         }

//         if(value < root.value){
//             this.search(root.left,value)
//         }else{
//             this.search(root.right,value)
//         }

//         return false
//     }

//     findMin(){
//         if(this.root == null){
//             return
//         }
//         let current = this.root

//         while(current.left != null){
//             current = current.left
//         }
//         return console.log(current.value)
//     }

//     delete(value){
//         return this.deleteNode(this.root,value)
//     }

//     deleteNode(root, value){
//         if(root == null){
//             return null
//         }

//         if(value < root.value){
//            root.left = this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else{
//             if(root.left == null && root.right == null){
//                 return null
//             }
//             else if(root.right == null){
//                 return root.left
//             } else if( root.left == null){
//                 return root.right
//             }
//             else{
//                 const minNode = this.findMinNode(root.right)
//                 root.value = minNode.value
//                 root.right = this.deleteNode(root.right, minNode.value)
//             }
//         }
//         return root

//     }

//    isValidBST(){
//         const result = this.isValidBSTHelper(this.root,-Infinity,Infinity)
//         console.log(result)
//    }

//    isValidBSTHelper(root,min,max){
//         if(root == null){
//             return true
//         }

//         if(root.value <= min || root.value >= max){
//             return false
//         }

//         return(
//             this.isValidBSTHelper(root.left,min,root.value) &&
//             this.isValidBSTHelper(root.right,root.value,max)
//         )
//    }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left )
//             this.preOrder(root.right )
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     leverOrder(){
//         if(this.root == null){
//             console.log("No data")
//             return
//         }
//         const queue = []
//         queue.push(this.root)
        
//         while(queue.length > 0){
//             let curr = queue.shift()
//             console.log(curr.value)
            
//             if(curr.left){
//                 queue.push(curr.left)
//             }

//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }


// }


// const bst = new BST()

// bst.insert(10)
// bst.insert(5)
// bst.insert(30)
// bst.insert(15)
// bst.insert(7)
// bst.insert(3)

// // bst.contains(11)

// bst.isValidBST()
// // bst.findMin()





// class Node{
//     constructor(value){
//         this.left = null
//         this.value = value
//         this.right = null
//     }
// }



// class BST{
//     constructor(){
//         this.root = null
//     }


//     insert(value){
//         const newNode = new Node(value)
//         if(!this.root){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root, newNode){
        
//         if(newNode.value < root.value){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else if(newNode.value > root.value){
//             if(root.right == null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     contains(value){
//         return this.search(this.root , value)
//     }

//     search(root,value){
//         if(root == null){
//             console.log("No data exists")
//             return
//         }

//         if(root.value == value){
//             console.log('Data exists')
//             return true
//         }

//         if(value < root.value){
//             return this.search(root.left , value)
//         }else{
//             return this.search(root.right , value)
//         }

//     }

//     findMin(){
//         if(this.root == null){
//             return null
//         }

//         let current = this.root

//         while(current.left !== null){
//             current = current.left
//         }

//         console.log(current.value)
//     }

//     findMax(){
//         if(this.root == null){
//             return null
//         }

//         let current = this.root

//         while(current.right !== null){
//             current = current.right
//         }

//         return console.log(current.value)
//     }

//     validBST(){
//         return this.validBSTHelper(-Infinity,Infinity,this.root)
//     }

//     validBSTHelper(min,max,root){
//         if(root == null){
//             return true
//         }

//         if(root.value <= min && root.value >= max){
//             return false
//         }

//         return(
//             this.validBSTHelper(root.left,min,root.value) &&
//             this.validBSTHelper(root.right,root.value,max)
//         )
        
//     }


//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
// }


// const bst = new BST()


// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// bst.contains(10)

// bst.findMax()

// console.log(bst.validBST(bst.root))

// bst.preOrder(bst.root)




class Node {
    constructor(value) {
        this.left = null;
        this.value = value;  // Change root to value
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    isValidBST() {
        return this.isValidBstHelper(-Infinity, Infinity, this.root);
    }

    isValidBstHelper(min, max, root) {
        if (root == null) {
            return true;
        }
        if (root.value <= min || root.value >= max) {  // Corrected condition
            return false;
        }

        return (
            this.isValidBstHelper(min, root.value, root.left) &&
            this.isValidBstHelper(root.value, max, root.right)
        );
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);  // Change root.root to root.value
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    delete(value) {
        return this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root == null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (root.left == null && root.right == null) {
                return null;
            } else if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            } else {
                const minNode = this.findMin(root.right);
                root.value = minNode.value;
                root.right = this.deleteNode(root.right, minNode.value);
            }
        }
        return root;
    }

    findMin(root) {
        let current = root;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current;
    }

    levelOrder() {
        if (this.root == null) {
            return console.log("no data exists");
        }

        let queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let current = queue.shift();
            console.log(current.value);  

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }
        }
    }
}

const btree = new BinaryTree();
btree.insert(10);
btree.insert(5);
btree.insert(15);
btree.insert(3);
btree.insert(7);

// Uncomment below to test
// console.log(btree.isValidBST());
btree.delete(3);

btree.levelOrder();

// btree.preOrder(btree.root)




// Ternary Tree implementation


// class Node{
//     constructor(value){
//         this.root = value
//         this.left = null
//         this.middle = null
//         this.right = null
//     }
// }



// class TernaryTree{
//     constructor(){
//         this.root = null
//     }


//     insert(value){
//         const newNode = new Node(value)

//         if(!this.root){
//             this.root = new Node(value)
//         }else{
//             return this.insertNode(this.root , newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value - 10){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }
//         else if(newNode.value >= root.value - 10 && newNode.value <= root.value + 10){
//             if(root.middle == null){
//                 root.middle = newNode
//             }else{
//                 this.insertNode(root.middle,newNode)
//             }
//         }
//         else{
//             if(root.right == null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right , newNode)
//             }
//         }
//     }

//     inOrderTraversal(node = this.root) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left);
//             console.log(node.root);
//             this.inOrderTraversal(node.middle);
//             this.inOrderTraversal(node.right);
//         }
//     }

// }


// const tTree = new TernaryTree()

// tTree.insert(10)
// tTree.insert(20)
// tTree.insert(30)
// tTree.insert(5)
// tTree.insert(15)
// tTree.insert(25)

// tTree.inOrderTraversal()