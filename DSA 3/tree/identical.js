
class TreeNode{
    constructor(data){
        this.left = null
        this.value = data
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    insert(data){
        let newNode = new TreeNode(data)

        if(this.root === null){
            this.root = newNode
        }else{
            let current = this.root
            while(true){
                if(current.data > data){
                    if(current.left === null){
                        current.left = newNode
                        break
                    }else{
                        current = current.left
                    }
                }else{
                    if(current.right === null){
                        current.right = newNode
                        break
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }

    static areIdentical(root1 , root2){
        if(root1 === null && root2 === null){
            return true
        }

        if(root1 === null || root2 === null){
            return false
        }

        return (root1.data === root2.data && this.areIdentical(root1.left,root2.left) && this.areIdentical(root1.right, root2.right))
    }

    
}

let list = new Tree()
let list2 = new Tree()


list.insert(15)
list.insert(20)
list.insert(10)
list.insert(7)
list.insert(13)
list.insert(25)
list.insert(18)

list2.insert(15)
list2.insert(20)
list2.insert(10)
list2.insert(7)
list2.insert(13)
list2.insert(25)
list2.insert(18)