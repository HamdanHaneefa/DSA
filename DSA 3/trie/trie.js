
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

        return node.isEndOfWord
    }

    startsWith(prefix) {
        let current = this.root;
        
        for(let char of prefix) {
            if(!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }

    findWordsWithPrefix(prefix) {
        const results = [];
        let current = this.root;
        
        // Navigate to the node representing the prefix
        for(let char of prefix) {
            if(!current.children[char]) {
                return results;
            }
            current = current.children[char];
        }
        
        // Helper function for DFS
        const dfs = (node, word) => {
            if(node.isEndOfWord) {
                results.push(prefix + word);
            }
            
            for(let char in node.children) {
                dfs(node.children[char], word + char);
            }
        }
        
        dfs(current, '');
        return results;
    }

}

const trie = new Trie()

trie.insert('hello')
trie.insert('help')

// console.log(trie.startsWith('h'))

console.log(trie.findWordsWithPrefix('hel'))
// console.log(trie.search('help'))
 
