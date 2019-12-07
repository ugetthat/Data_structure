var readline = require('readline-sync')
var str = parseInt(readline.question("Enter the range for the prime number"))



//creating the one dimensional array to store the prime_number
var pri = new Array(str)
//storing the prime number in an "pri" array
var k=0;
for(let pr=0;pr<str;pr++){

    if(isPrime(pr)){
        
    //parsing for the storing of prime number    
        pri[k]=parseInt(pr)
        k++
    }
}

//initializing the value for row and col
var row = parseInt(str/100)
var col = parseInt(30)


//creating the 2d array and storing the prime value
creating_2d_array(pri,row,col)

//actual implementation of storing the value 
function creating_2d_array(pri,row,col){

    //creating the 1d array
    var gfg = new Array(row)

    var inc = parseInt(0);


    for (var i = 0; i < gfg.length; i++) {
        gfg[i] = new Array(col);
    } 


//looking for the range that is 0-100 and so_on
var count =0
    for (var i = 0; i < row; i++) {
        count=count+100
        for (var j = 0; j < col; j++) {
             if(pri[inc]<count){
            gfg[i][j] = pri[inc];
            inc++
             }
        }
    }

//printing the prime number
console.log()
console.log("=====================")
console.log("The 2d array with the range is ========")
console.log("====================")
    console.log(gfg)









}


















//function for prime number 
function isPrime( n)
{
    // Corner case 
    if (n <= 1){
        return false;}

    // Check from 2 to n-1 
    for (let i = 2; i < n; i++)
    if (n % i == 0){
        return false;}

    return true;
} 