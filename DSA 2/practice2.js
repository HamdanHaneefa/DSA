
    class Node{
        constructor(value){
            this.left = null
            this.value = value
            this.right = null
        }
    }

    class BinarySearchTree{
        constructor(){
            this.root = null
        }


        insert(value){
            const newNode = new Node(value)
            
            if(!this.root){
                this.root = newNode
            }else{
                return this.insertNode(this.root,newNode)
            }
        }

        insertNode(root,newNode){
            if(newNode.value < root.value){
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

        isValidBst(){
            return this.isValidBstHelper(-Infinity,Infinity,this.root)
        }

        isValidBstHelper(min,max,root){
            if(root == null){
                return true
            }

            if(root.value <= min && root.value >= max){
                return false
            }

            return(
                this.isValidBstHelper(root.left,min,root.value) &&
                this.isValidBstHelper(root.right,root.value,max)
            )
        }

        delete(value){
            return this.deleteNode(this.root,value)
        }

        deleteNode(root,value){
            if(root == null){
                return true
            }

            if(value < root.value){
                root.left = this.deleteNode(root.left,value)
            }
            else if( value > root.value){
                root.right = this.deleteNode(root.right,value)
            }
            else{
                if(root.left == null && root.right == null){
                    return null
                }
                else if(root.left == null){
                    return root.right
                }
                else if(root.right == null){
                    return root.left
                }
                else{
                    const min = this.findMin(root.right)
                    root.value = min.value
                    root.right = this.deleteNode(root.right,min.value)
                }
            }
            return root
        }

        findMin(root){
            let current = root
            while(current && current.left !== null){
                current = current.left
            }
            return current
        }

        secondLargest(node){
            if(!node || (!node.right && !node.left)){
                return null
            }
            let parent = null
            while(node.right){
                parent = node
                node = node.right
            }

            if(node.left){
                return this.largest(node.left)
            }

            return parent.value
        }

        largest(node){
            if(node.right){
                node = node.right
            }
            return node.value
        }


        secondSmallest(node){
            if(!node || (!node.left && !node.right)){
                return null
            }
            let parent = null
            while(node.left){
                parent = node
                node = node.left
            }

        if(node.right){
            return this.smallest(node.right)
        }

        return parent.value
        
    }

        smallest(node){
            while(node.left){
                node = node.left
            }
            return node.value
        }

        preOrder(root){
            if(root){
                console.log(root.value)
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }

        leftCount(root) {
            if (!root) {
                return 0; // Return 0 if root is null
            }
        
            let count = 0;
        
            // If there's a left child, increment the count
            if (root.left) {
                count = 1;
            }
        
            // Recursively count the left children in the entire tree
            return count + this.leftCount(root.left) + this.leftCount(root.right);
        }
        
    }


    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(15)
    bst.insert(5)
    bst.insert(3)
    bst.insert(7)
    bst.insert(13)

    console.log(bst.leftCount(bst.root))
   
    // console.log(bst.secondLargest(bst.root))

    // console.log(bst.secondSmallest(bst.root))

// bst.delete(3)
// bst.preOrder(bst.root)

