//Creating a function to peek inside the stack for the matching parenthesis


//creating the node for the stack=================================

class Node{
    constructor(value){
        this.value = value
        this.next = null

    }
}
//=============================================================

//creating the stack class========================
class Stack{
    //creating the properties for stack=========================
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

//pushing the value onto the stack ============================
    push(val){
        //If there is no node onto the stack
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }
        //If there is one node onto the stack
        else{
            var temp = this.first
            this.first = newNode
            this.first.next = temp


        }
         ++this.size
        

    }
    length(){
        return this.size
    }
 

    pop(){

        //if there is nothing in the linkedlist
        if(!this.first){
            return null
        }

        var temp = this.first;

        if(this.first === this.last ){
            this.last = null
        }
        this.first = this.first.next
        --this.size

       

      


    }

      peek() 
      {
          if(this.size == 0){
              return null
          }
          
         return     this.last.value
          
      }











}







var stack = new Stack()
var readline = require('readline-sync')
var str = readline.question("Enter to '()' check for  the balanced parenthesis")
console.log("======================")
console.log("parenthesis are balanced ? -> " +ifBalanced(str))
console.log("======================")

function ifBalanced(str){
for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    //if the letter is an opening paren push it on the stack
    if (letter === '(') {
        stack.push(letter)
    }
    else if (letter === ')') 
    {
        if (stack.length() == 0) {
            return false //the closing paren has no matching opening paren
        }
        else if (stack.peek() == '(') {
                stack.pop()

        }
        else 
        {
           return false
        }


    }

    

 }


return stack.length() == 0
}   

