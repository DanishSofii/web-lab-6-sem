//(a)	Write a function translate() that will translate a text i.e, double every consonant and 
//place an occurrence of "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon"..

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let string = document.getElementById("str").value;
// let string = "this is fun";

let newStr = "";
let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

for(let i =0; i < string.length;i++ ){
    if(string[i] === " "){
        newStr += " ";
    }
    else if(!(vowel.includes(string[i]))){
        newStr += string[i];
        newStr += "o";
        newStr += string[i];
    }
    
    else{
        newStr += string[i];
    }
}

let op = document.getElementById("output");
op.innerHTML = newStr;
})

// console.log(newStr);