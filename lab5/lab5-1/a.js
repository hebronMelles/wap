// Question 1
function max(numA,numB) {
    if(numA > numB) return numA;
    else return numB;
 }
 console.log(max(4,5))


 // Question 2
function maxOfThree(numA, numB, numC){
    if(numA > numB && numA > numC) return numA;
    if(numB > numA && numB > numC) return numB;
    return numC;
}
console.log(maxOfThree(2,6,3));


//Question 3
function isVowel(str){
    if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' ) return true;
    return false;
}
console.log(isVowel('e'));


//Question 4
function sum(arr){
    var sum = 0;
    for(let i =0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function multiply(arr){
    var sum = 1;
    for(let i =0; i < arr.length; i++){
        sum *= arr[i];
    }
    return sum;
}
var arr = [2,5,7,4];
console.log(sum(arr));
console.log(multiply(arr));


// Question 5
function reverse(str){
    let rev = "";
    for(let i = str.length-1; i >= 0; i--){
        rev += str.charAt(i);
    }
    return rev;
}
console.log(reverse("hello"));

// Question 6
function longestWordLength(arr){
    let longest = arr[0].length;
    for(let i = 0; i< arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest;
}
let str = ["hello","hi","hiiii"];
console.log(longestWordLength(str));


// Question 7
function filterLongerWord(arr, num){
    let arr2 = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > num){
            arr2[index] = arr[i];
            index++;
        }
    }
    return arr2;
}
console.log(filterLongerWord(str,3));


// Question 8
function sumOfSquares(arr){
     let arr2 = arr.map(x => x * x);
    return arr2;
}
console.log(sumOfSquares(arr));


// Question 9
function printOnlyOddNumbers(arr){
    let arr2 = arr.filter(x => x % 2 != 0);
    return arr2;
}
console.log(printOnlyOddNumbers(arr));

// Question 10
function computeSumOfSquaresOfEvensOnly(arr){
    let arr2 = arr.filter(x => x % 2 ==0).map(x => x * x);
    let sum = arr2.reduce((x,y) => x + y );
    return sum;
}
console.log(computeSumOfSquaresOfEvensOnly(arr));


// Question 11
function sumReduce(arr){
    let sum = arr.reduce((x,y) => x + y);
    return sum;
}
function multiplyReduce(arr){
    let sum = arr.reduce((x,y) => x * y);
    return sum;
}
console.log(sumReduce(arr));
console.log(multiplyReduce(arr));


// Question 12
function printFibo(n,a,b){
    let fibo = [];
    let num = 0;
    while(n > 0){
        fibo[num] = a;
        a = a + b;
        b = a -b;
        n = n -1;
        num++;
    }
    return fibo;
}
console.log(printFibo(12,0,1));




console.log(as);
var as = "k";
console.log(as);