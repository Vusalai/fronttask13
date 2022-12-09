let arr=[1,3,5,7,9,2,4,6,8,10]
let even=[]
let odd=[]
function task2(){
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2==0) {
            even.push(arr[index])
        }else{
            odd.push(arr[index])
        }
        
    }
    console.log(odd);
    console.log(even);
}
task2();




function checkPalindrome(str){
    const len=str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i]!==str[len-1-i]) {
            alert('It is not palindrome');
            return;
        }
        
    }
    alert('It is a palindrome');
}

const string=prompt('Check Palindrome:');
const value=checkPalindrome(string);
console.log(value);