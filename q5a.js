function pluralize(noun,number){
    const specialNouns ={
        sheep: 'sheep',
        goose : 'geese',
        person : 'people',
        mouse : 'mice'
    }

    if(number === 1){
        return `${number} ${noun}`;
    }
    else if(specialNouns[noun]){
        return `${number} ${specialNouns[noun]}`;
    }
    else{
        if(noun.endsWith('y') && !noun.endsWith('ay') && !noun.endsWith('ey') && !noun.endsWith('iy') && !noun.endsWith('oy') && !noun.endsWith('uy')){
            return `${number} ${noun.slice(0,-1)}ies`;
        }
        else if(noun.endsWith('s') || noun.endsWith('sh') || noun.endsWith('ch') || noun.endsWith('x') ||noun.endsWith('x')){
            return `${number} ${noun}es`;
        }
        else{
            return `${number} ${noun}s`;
        }
    }
};

let btn = document.getElementById('btn');
let noun = document.getElementById('noun');
let number = document.getElementById('number');
let output = document.getElementById('output');

btn.addEventListener('click',()=>{
    let result = pluralize(noun.value,number.value);
    output.textContent=result;
})