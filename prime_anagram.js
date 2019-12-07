//Creating a function to peek inside the stack for the matching parenthesis


//creating the node for the stack=================================

class Node {
    constructor(value) {
        this.value = value
        this.next = null

    }
}
//=============================================================

//creating the stack class========================
class Stack {
    //creating the properties for stack=========================
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    //pushing the value onto the stack ============================
    push(val) {
        //If there is no node onto the stack
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        }
        //If there is one node onto the stack
        else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp


        }
        ++this.size


    }
    length() {
        return this.size
    }


    pop() {

        //if there is nothing in the linkedlist
        if (!this.first) {
            return null
        }

        var temp = this.first;

        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        --this.size

        return this.first




    }

    peek() {
        if (this.size == 0) {
            return null
        }

        return this.last.value

    }











}




var stck = new Stack();






































//Main function to check if it is prime-anagram or not =================================================================


var readline = require('readline-sync')
var str = parseInt(readline.question("Enter the range for the prime number"))



//creating the one dimensional array to store the prime_number
var pri = new Array(str)
//storing the prime number in an "pri" array
var k = 0;
for (let pr = 0; pr < str; pr++) {

    if (isPrime(pr)) {

        //parsing for the storing of prime number    
        pri[k] = parseInt(pr)
        k++
    }
}
var count1 = 0
coount(pri)
   // ================================================
    function coount(pri) {

        while (pri[count1] > 0) {
            count1++
        }
        console.log("total number of values are = " + count1);
    }
// ==================================================

isAnagram(pri,count1)

//checking if is anagram
 function isAnagram(pri,count){
    var s1,s2
 for(let i = 0;i<count;i++){
     s1 = pri[i].toString()
        for(let j=0;j<count;j++){
            if(i!=j){
                s2=pri[j].toString()
                status=isStringAnagram(s1,s2)
                if(status == true){

                    console.log(s1+" "+s2);
                    //stck.push(s1)
                }
                
            }
        }



    }
}



//checking if the string are anagram or not
function isStringAnagram(s1,s2)
{
    var x = s1.split('')
    var y =s2.split('')
    var x1 = insertionSort(x)
    var y1 = insertionSort(y)
    var flag = 0
    if(x1.length==y1.length){
    for (let j = 0;  j<x1.length; j++) {
        if (x1[j] != y1[j]) {
            flag = 1

        }
    }
    if (flag == 0) {
        return true
    }else{
        return false
    }
    }
    else{
        return false
    }

}


function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr
}











//function for prime number 
function isPrime(n) {
    // Corner case 
    if (n <= 1) {
        return false;
    }

    // Check from 2 to n-1 
    for (let i = 2; i < n; i++)
        if (n % i == 0) {
            return false;
        }

    return true;
} 




console.log("The queue are==========")
let q1;
for (let c1 = 0; c1 < count1; c1++) {
    let q1 = q.pop()
    if (q1 != null) {
        console.log(q1);
    }


}

console.log("The prime anagram in stack are |^|")
