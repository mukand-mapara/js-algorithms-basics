let str = "madam";

// function palindrome(str){
//     return str === str.split("").reverse().join("");
// }


function palindrome(str){
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str.charAt(left) !== str.charAt(right)){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(palindrome(str))