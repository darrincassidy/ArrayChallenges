
// 1. Always Hungry


function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i]=="food") {
            foodCount++;
            console.log("yummy");
        }
    }
    if(foodCount==0) {
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


// 2. High-Pass Filter


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i]>5) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better Than Average


function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    var getAverage = 0;
    for(var i=0;i<arr.length;i++) {
        sum+=arr[i];
    }
    getAverage = sum / arr.length;
    for(var i=0;i<arr.length;i++) {
        if(arr[i]>getAverage) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// 4. Reverse Array


function reverse(arr) {
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Arrray


function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=0;i<n;i++) {
        if(i>1) {
            var lastIndex = fibArr.length;
            num1 = fibArr[fibArr.length-1];
            num2 = fibArr[fibArr.length-2];
            fibArr.push(num1+num2);
        }    
    }   
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





