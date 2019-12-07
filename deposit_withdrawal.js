
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
var person = read.question("Enter queue length ")


//noting the amount availabe with the person standing in the queue
for(let j=0;j<person;j++)
{
    q.enqueue(read.question("Enter the amount to be processed by person "+(j+1)+" = "))
}

let withdrawal=0
let deposit=0

console.log()

//calculating the withdrawal and the deposit amount total
for (let i = 0; i < person; i++) {
    let amount = parseInt(q.dequeue(i))
    let choose = read.question("press 0 for withdrawal or 1 for deposit of amount "+amount+" = ")
    if(choose == 0)withdrawal += amount
                        
    else{deposit = (deposit+amount)}

}

// if the withdrawal and deposit cancel each other out
var check_totality = withdrawal-deposit

console.log()

//checking for the balance in the revenue
if(check_totality === 0){
    console.log("Today the withdrawal is same as deposit")
}
else{
    console.log( " Today the withdrawal is not same as deposit")
}
