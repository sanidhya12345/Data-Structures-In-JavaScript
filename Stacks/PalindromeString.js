//Check the string is palindrome or not.

var letters=[]

var word="racecar"
var reverseWord="";

for(let i=0;i<word.length;i++){
    letters.push(word[i])
}

for(let i=0;i<word.length;i++){
    reverseWord+=letters.pop();
}
if(reverseWord===word){
    console.log(`${word} is palindrome`)
}
else{
    console.log('Given word is not palindrome.')
} 