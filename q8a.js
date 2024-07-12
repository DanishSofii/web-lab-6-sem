function vowelCount(st){
    const vowels = ['a','e','i','o','u'];
    const count = {a:0,e:0,i:0,o:0,u:0};

    for(const char of st.toLowerCase()){
        if(vowels.includes(char)){
            count[char]++;
        }
    }
    console.log(`a, e, i, o and u appear respectively ${count.a}, ${count.e}, ${count.i}, ${count.o} and ${count.u} `)
}

vowelCount("Le Tour de France")