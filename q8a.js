//      ------------------------------------add the  below script lines to your package.json file ie "scripts" : {"start" : "node q8a.js"}
// {
//     "dependencies": {
//       "body-parser": "^1.20.2",
//       "ejs": "^3.1.10",
//       "express": "^4.19.2",
//       "mongodb": "^6.8.0"
//     },
//     "scripts":{
//       "start" : "node q8a.js"
//     }
//   }
  


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