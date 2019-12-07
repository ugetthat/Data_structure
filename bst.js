class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
//inserting at the root or left or right parent
    insert(value) {
        var newNode = new Node(value);
        //inserting at the root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        //if the root is present
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            //traversing through the right part for insertion
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                //giving the value of current node to the newly inserted node 
                current = current.left;
            } else {
                //traversing the right node
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    //find the node in the tree
    find(value) {
        //if there is no root node 
        if (this.root === null) return false;
        var current = this.root,
        //setting the value to be bydefault false
            found = false;
            //travesing through
        while (current && !found) {
            //traversing the left subtree
            if (value < current.value) {
                current = current.left;
                //traversing the right subtree
            } else if (value > current.value) {
                current = current.right;
            } else {
                //if the node is found
                found = true;
            }
        }
        //if the node is not found
        if (!found) return undefined;
        return current;
    }

    //for the peeking 
    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16


var read = require('readline-sync');
var tree = new BinarySearchTree();

var node  = read.question("Enter the number of node you want in the tree  = ")

for (let j = 0; j < node; j++) {
    tree.insert(read.question("Enter the node value = "))
}


console.log()
var search = read.question("Enter the search value you want to find = ")
console.log(tree.find(search))




