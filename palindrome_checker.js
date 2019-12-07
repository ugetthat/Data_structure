//creating the node for queue
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

//creating the queue class
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }


//adding into the queue in the "using the concept of unshift ->at the begining"
    enqueue(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        ++this.size


    }

 //removing from the queue from the begining
 
    dequeue(){
        if(!this.first){
            return null
        }

        var temp = this.first
        if(this.first === this.last ){
            this.last = null
        }
        this.first = this.first.next
        --this.size

        return temp.value



    }
}

var q = new Queue()
var read = require('readline-sync');
var ifpalin = read.question('Enter the string for the palindrome evaluation = ');


//putting the value char by char in the queue
for(let i=0;i<ifpalin.length;i++){
q.enqueue(ifpalin.charAt(i))
}

//setting up the flag to check
let flag =1

//dequeue and comparing the character
for (let i = 0; i < ifpalin.length; i++) {
    if (ifpalin.charAt(i) == q.dequeue()){flag = 0}
}


//checking for the palindrome
if(flag == 0){
    console.log(ifpalin+" ,True -> for palindrome")
}
else{
    console.log(ifpalin + " ,False -> for palindrome")
}
