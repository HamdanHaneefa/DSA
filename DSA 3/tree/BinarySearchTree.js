class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
        this.leftChildCount = 0
    }

    isEmpty(){
        return this.root === null
    }

    //Insertion
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            this.leftChildCount++
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    //Searchinng || Contains

    contains(value){
        return this.search(this.root,value)
    }

    search(node,value){ 
        if(node == null){
            return console.log(false,'No data found')
        }
        if(node.value == value){
            return console.log(true ,node.value)
        }

        if(value < node.value){
            return this.search(node.left , value)
        }else{
            return this.search(node.right, value)
        }
    }


    // Find Minimum
    findMin(){
        if(this.isEmpty()){
            return null
        }

        let currentNode = this.root
        while(currentNode.left !== null){
            currentNode = currentNode.left
        }

        return console.log(currentNode.value)
    }

    findMax(){
        if(this.isEmpty()){
            return null
        }

        let currentNode = this.root
        while(currentNode.right !== null){
            currentNode = currentNode.right
        }
        return console.log(currentNode.value)
    }

    // Is Validate 
    isValidBST(){
        const result = this.isValidBSTHelper(this.root,-Infinity,Infinity)
        console.log(result ? "It is a valid BST" : "It is not a valid BST");
        return result
    }

    isValidBSTHelper(root,min,max){

        if(root == null){
            return true
        }

        if(root.value <= min && root.value >= max){
            return false
        }

        return (
            this.isValidBSTHelper(root.left,min,root.value) &&
            this.isValidBSTHelper(root.right,root.value,max)
        )

    }
    

    //Traversal (DFS)
    preOrder(root){
        if(root){
            console.log(root.value)
            if(root.left){
                this.leftChildCount++
            }
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }


    //Traversal (BFS)
    levelOrder(){
        if(this.isEmpty()){
           return console.log("tree is empty")
        }
        const queue = []
        queue.push(this.root)
        while(queue.length > 0){
            let curr  = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


    delete(value){
        this.deleteNode(this.root,value)
    }

    deleteNode(root, value){
        if (root === null) {
            return root;
        }
    
        // If value is smaller than the root's value, then it's in the left subtree
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }
        // If value is larger than the root's value, then it's in the right subtree
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        }
        // If value is the same as root's value, then this is the node to be deleted
        else {
            // Case 1: Node has no children (leaf node)
            if (root.left === null && root.right === null) {
                return null;
            }
            // Case 2: Node has only one child
            else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            // Case 3: Node has two children
            else {
                // Find the in-order successor (smallest in the right subtree)
                const minNode = this.findMinNode(root.right);
                // Copy the in-order successor's value to this node
                root.value = minNode.value;
                // Delete the in-order successor
                root.right = this.deleteNode(root.right, minNode.value);
            }
        }
        return root;
    }
    
    
    findMinNode(root) {
        let current = root;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current;
    }

}

function isSameTree(tree1,tree2){
    if(tree1 == null && tree2 == null){
        return true
    }

    if(tree1 == null || tree2 == null){
        return false
    }

    return(
        tree1.value === tree2.value && isSameTree(tree1.left,tree2.left) && isSameTree(tree2.right,tree2.right )
    )
}

const bst1 = new BinarySearchTree()
const bst2 = new BinarySearchTree()


bst1.insert(10)
bst1.insert(5)
bst1.insert(15)
bst1.insert(3)
bst1.insert(20)

bst1.preOrder(bst1.root)

console.log('left count: ',bst1.leftChildCount)

// console.log(isSameTree(bst1.root,bst2.root))


// bst.levelOrder()

// bst.delete(3)

// bst.levelOrder()

// bst.contains(15)
// bst.findMin()
// bst.findMax()

//Traversal (DFS)
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

//Traversal (BFS)
// bst.levelOrder()


// bst1.isValidBST()


