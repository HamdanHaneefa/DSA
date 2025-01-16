
class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(words){
        let node = this.root

        for(let char of words){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }

        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

        return true
    }

    findWordWithPrefix(prefix){
        const result = []
        let current = this.root
   
        for(let char of prefix) {
            if(!current.children[char]) {
                return result;
            }
            current = current.children[char];
        }
    
        const dfs = (node, word) => {
            if(node.isEndOfWord){
                result.push(word)
            }
            for(let char in node.children){
                dfs(node.children[char],word + char)
            }
        }

        dfs(current,'')

        return console.log(result)  
      
    }
}



const trie = new Trie()

trie.insert("hello")
trie.insert('help')

trie.findWordWithPrefix('hel')


