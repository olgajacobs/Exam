// task 1

function strCount (str, letter){  
    let arr = str.split('');
    let arrNew = arr.filter(elem => elem == letter);
    console.log (arrNew.length);
}


strCount ("Hello", "o");

// task  2

function squareSum(numbers){
    let numbersSquare = numbers.map((elem) => elem ** 2);

    let initialValue = 0;

    let numbersSum = numbersSquare.reduce(function(a,b) {
        return a + b;
    }, initialValue);
    console.log(numbersSum);

}

squareSum([]);


// task 3

function nearestSq(n){
    let num = Math.round(Math.sqrt(n));
    console.log(num ** 2);
}

nearestSq (89);

// task 4

function solution(strg){
    let strSplit = strg.split('').reverse().join('');
    console.log(strSplit);
  
}

solution ('word')

// task 5

function addLength(string) {
    let arrSplit = string.split(' ');
    let arrMap = arrSplit.map((elem) => elem + ' ' +elem.length);
    console.log(arrMap);
    }
    

addLength('nice big jacket');

// task 6

function mango(quantity, price){

    let mangoSet = Math.floor(quantity / 3) * 2 * price  + (quantity % 3) * price;
    console.log(mangoSet);

}

mango (5, 3);

// task 7

function litres(time) {
    
    console.log(Math.floor(0.5 * time));
  }

 litres (9); 

 // task 8

 function invert(array) {
    console.log( array.map((elem) => elem * -1));
 }
 invert ([1, -5, 4, 7, -8]);

 // task 9

 function powersOfTwo(n){
    
    let result = [];

    for (let i = 0; i <= n; i++) {
        elem = Math.pow(2, i); 
        result.push(elem)
    }
    console.log(result);  
    
  }
  powersOfTwo(5)

 // task 10

 function grow(x){

        const initialValue = 0;
        let newArr = x.reduce((a, b) => a * b);
        console.log(newArr);
    
 }

 grow ([4, 1, 1, 1, 4]);