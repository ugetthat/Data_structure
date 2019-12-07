



class HashTable{
    constructor(size =53){
        this.keyMap = new Array(size)
    }


//Making the hashtable using the prime number concept

    _hash(key) 
    {
        let total = 0;
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length

        }
        console.log(total)
        
        

    }


//setting the key value pair using the separate chaining method
    set(key,value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value]);
    }

    get(key){
        let index = this._hash(key)
        if(this.keyMap[index])
        {
          for(let i =0;i<this.keyMap[index].length;i++){
              if(this.keyMap[index][i][0] === key){
                  console.log(" ======== " )
                  console.log(" value ->" + this.keyMap[index][i][1])
                  console.log(" ======== ")
              }

          }  
        }
        return undefined

    }






}


let ht = new HashTable(17);

var read = require('readline-sync');
//creating the hashset
var nodecount = read.question('How many sets you want to create  ? = ');
console.log("=====================")
console.log("start to enter the key-value pai")
console.log("======================")
//entering the key value pair for setting up the values
for (let i = 0; i < nodecount; i++) {
   let k = read.question("enter the key  = ");
    let v = read.question("enter the value  = ");
    ht.set(k,v)


}







//Retreiving from the hashtable
console.log("=============getting the value========")
let key =read.question("enter the key to search the value")
 ht.get(key) 





