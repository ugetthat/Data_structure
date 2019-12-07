//==================================================================================
//Creating the node ==================================================================================
//==================================================================================

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//==================================================================================

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //==================================================================================
    //Pushing the value ==================================================================================

    //==================================================================================

    push(val) {
        var newNode = new Node(val)

        //==================================================================================
        //When the Singlylinkedlist is empty and only the "first node" is added
        //==================================================================================

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }

        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    //==================================================================================
    //Traversing the node
    //==================================================================================

    traverse() {
        console.log()
        console.log("The node are ======")

        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    //The size of the node 
    size() {
        return this.length
    }

    //===========================================================================
    //Pop the last node and alo assingnig the "new_tail_node" ==================================================================================
    //==================================================================================
    pop() {
        if (!this.head) {
            return undefined;


        }

        var current = this.head
        var newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }
        console.log()
        console.log("===========")
        console.log("'new_tail' = " + current.val)
        console.log("'last_tail' =' " + newTail.val)
        console.log("==============")

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current

    }
    //Shifting the current node that is head
    shift_currentHead_removal() {
        if (!this.head) {
            return undefined
        }


        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.length = null
        }
        console.log()
        console.log("============removed_current_head======")
        console.log(currentHead)
        console.log("======================================")
    }
    //adding new_head to the "previous" first node 
    unshift_the_prev_head(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        console.log()






    }

    //Getting the item using the index position of the linked
    get_the_value_by_index(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        var counter = 0
        var current = this.head
        while (counter != index) {
            current = current.next
            counter++
        }
        console.log()
        console.log("The get_by_index  value is = " + current.val)
        return current


    }
    //Updating the desired node
    set_that_is_updating(index, val) {
        var foundNode = this.get_the_value_by_index(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false;

    }

    //inserting the node at a specific location
    insert_at_a_loc(index, val) {
        if (index < 0 || index > this.length) {return false};
        if (index === this.length) {return !!this.push(val)};
        if (index == 0) {return !!this.unshift_the_prev_head(val)};

        var newNode = new Node(val);
        var prev = this.get_the_value_by_index(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //removing the node from the particular location
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index == 0) {
            return this.shift_currentHead_removal()
        }
        if (index === this.length - 1) { return this.pop() }
        var previousNode = this.get_the_value_by_index(index - 1)
        var removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        //displaying the removed node
        console.log("The removed node is = " + removed.val)
        //returning the removed node
        return removed



    }

    //function sorted way
    // ===================================================================================	 
     /* function to insert a new_node in a list. */
     sortedInsert(ne_node)
{
    var new_node = new Node(ne_node)
    var current = new Node()

    /* Special case for head node */
    if (this.head == null || this.head.val >= new_node.val) {
        new_node.next = this.head;
        this.head = new_node;
        this.length++
    }
    else {

        /* Locate the node before point of insertion. */
        current = this.head;

        while (current.next != null &&
            current.next.data < new_node.data)
            current = current.next;

        new_node.next = current.next;
        current.next = new_node;
        this.length++
    }
} 











}

var list1 = new SinglyLinkedList()




//Taking the input from the user
var read = require('readline-sync');
var nodecount = read.question('How many node you want to make of linked list ? = ');
for (let i = 0; i < nodecount; i++) {
    list1.sortedInsert(read.question("Enter the node = "))


}
// //traversing the node

list1.traverse()

 
list1.traverse()

//deleting the user specified node using the index provided 
var del = read.question("Which node you want to delete = ")
list1.remove(del)
//traversing the node
list1.traverse()

console.log("The size of the node is  = " + list1.size())
//taking the user input for the value and position number
var index = read.question("At which position do you want to add the node  = ")
var val = read.question("specify the value  = ")
list1.insert_at_a_loc(index, val)
list1.traverse()

