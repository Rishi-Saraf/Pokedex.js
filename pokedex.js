// importing all the stuff
const axios = require("axios")
const key = require("./key")

let data = null

var options = {
    method: 'GET',
    url: 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
    headers: {
      'x-rapidapi-key': key,
      'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
    }
  };
  
exports.getPokemonById = (pokemon)=>{
      axios.request(options)
     .then(response=> {
          nameLength = pokemon.length
          lastChars = pokemon.slice(1,nameLength)
          firstChar = pokemon.charAt(0).toUpperCase()
          let name = firstChar.concat(lastChars)
          let result =[]
          data = response.data
          data.forEach(element => {
              if(element.pokemon_name===name){
                  result.push(element)     
              }
          });
          if(result<1){
            return console.log(`NO POKEMONS NAMED '${pokemon}' FOUND`)
          }
          result.forEach(element=>{
              console.log(`
Pokemon name : ${element.pokemon_name},
Form : ${element.form},
Attack : ${element.base_attack},
Defense : ${element.base_defense},
Stamina : ${element.base_stamina}
              `)
          })
          console.log(`${result.length} TYPES OF POKEMONS NAMED '${pokemon}' FOUND
          `)
      })
      .catch(function (error) {
          console.error(error);
      });
  }

exports.compareOverall = (pokemon1,pokemon2)=>{
    axios.request(options)
    .then(response=> {
         pokemon1 = pokemon1.toLowerCase()
         nameLength = pokemon1.length
         lastChars = pokemon1.slice(1,nameLength)
         firstChar = pokemon1.charAt(0).toUpperCase()
         let name1 = firstChar.concat(lastChars)
         pokemon2 = pokemon2.toLowerCase()
         nameLength = pokemon2.length
         lastChars = pokemon2.slice(1,nameLength)
         firstChar = pokemon2.charAt(0).toUpperCase()
         let name2 = firstChar.concat(lastChars)
         let result =[]

        if(pokemon1===pokemon2){
          console.log("They are the same pokemons...")
          return 0;
        }

         data = response.data
         data.forEach(element => {
             if(element.pokemon_name===name1 && element.form==="Normal" || element.pokemon_name===name2 && element.form==="Normal"){
                 result.push(element)     
             }
         });
          if(result.length<2){
            return console.log("IT SEEMS THE NAMES YOU ENTERED ARENT CORRECT")
         }
        result.forEach(element=>{
            console.log(`
Pokemon  :  ${element.pokemon_name},
Attack   :  ${element.base_attack},
Defense  :  ${element.base_defense},
Stamina  :  ${element.base_stamina}
                          `)
        })
        firstPokePoints = result[0].base_attack+result[0].base_defense+result[0].base_stamina
        secondPokePoints = result[1].base_attack+result[1].base_defense+result[1].base_stamina
        if(firstPokePoints>secondPokePoints){
          console.log(`${result[0].pokemon_name} is better when compared with ${result[1].pokemon_name}`)
        }
        else{
          console.log(`${result[1].pokemon_name} is better when compared with ${result[0].pokemon_name}`)
        }
    })
}

exports.compareAttack = (pokemon1,pokemon2)=>{
    axios.request(options)
    .then(response=> {
         pokemon1 = pokemon1.toLowerCase()
         nameLength = pokemon1.length
         lastChars = pokemon1.slice(1,nameLength)
         firstChar = pokemon1.charAt(0).toUpperCase()
         let name1 = firstChar.concat(lastChars)
         pokemon2 = pokemon2.toLowerCase()
         nameLength = pokemon2.length
         lastChars = pokemon2.slice(1,nameLength)
         firstChar = pokemon2.charAt(0).toUpperCase()
         let name2 = firstChar.concat(lastChars)
         let result =[]

        if(pokemon1===pokemon2){
          console.log("They are the same pokemons...")
          return 0;
        }

         data = response.data
         data.forEach(element => {
             if(element.pokemon_name===name1 && element.form==="Normal" || element.pokemon_name===name2 && element.form==="Normal"){
                 result.push(element)     
             }
         });
         if(result.length<2){
            return console.log("IT SEEMS THE NAMES YOU ENTERED ARENT CORRECT")
         }
        result.forEach(element=>{
            console.log(`
Pokemon  :  ${element.pokemon_name},
Attack   :  ${element.base_attack}
                          `)
        })
        firstPokePoints = result[0].base_attack
        secondPokePoints = result[1].base_attack
        if(firstPokePoints>secondPokePoints){
          console.log(`${result[0].pokemon_name} is better when compared with ${result[1].pokemon_name} in terms of attack`)
        }
        else{
          console.log(`${result[1].pokemon_name} is better when compared with ${result[0].pokemon_name} in terms of attack`)
        }
    })
}

exports.compareDefense = (pokemon1,pokemon2)=>{
    axios.request(options)
    .then(response=> {
         pokemon1 = pokemon1.toLowerCase()
         nameLength = pokemon1.length
         lastChars = pokemon1.slice(1,nameLength)
         firstChar = pokemon1.charAt(0).toUpperCase()
         let name1 = firstChar.concat(lastChars)
         pokemon2 = pokemon2.toLowerCase()
         nameLength = pokemon2.length
         lastChars = pokemon2.slice(1,nameLength)
         firstChar = pokemon2.charAt(0).toUpperCase()
         let name2 = firstChar.concat(lastChars)
         let result =[]

        if(pokemon1===pokemon2){
          console.log("They are the same pokemons...")
          return 0;
        }

         data = response.data
         data.forEach(element => {
             if(element.pokemon_name===name1 && element.form==="Normal" || element.pokemon_name===name2 && element.form==="Normal"){
                 result.push(element)     
             }
         });
         if(result.length<2){
            return console.log("IT SEEMS THE NAMES YOU ENTERED ARENT CORRECT")
         }
        result.forEach(element=>{
            console.log(`
Pokemon  :  ${element.pokemon_name},
Defense   :  ${element.base_defense}
                          `)
        })
        firstPokePoints = result[0].base_defense
        secondPokePoints = result[1].base_defense
        if(firstPokePoints>secondPokePoints){
          console.log(`${result[0].pokemon_name} is better when compared with ${result[1].pokemon_name} in terms of defense`)
        }
        else{
          console.log(`${result[1].pokemon_name} is better when compared with ${result[0].pokemon_name} in terms of defense`)
        }
    })
}

exports.compareStamina = (pokemon1,pokemon2)=>{
    axios.request(options)
    .then(response=> {
         pokemon1 = pokemon1.toLowerCase()
         nameLength = pokemon1.length
         lastChars = pokemon1.slice(1,nameLength)
         firstChar = pokemon1.charAt(0).toUpperCase()
         let name1 = firstChar.concat(lastChars)
         pokemon2 = pokemon2.toLowerCase()
         nameLength = pokemon2.length
         lastChars = pokemon2.slice(1,nameLength)
         firstChar = pokemon2.charAt(0).toUpperCase()
         let name2 = firstChar.concat(lastChars)
         let result =[]

        if(pokemon1===pokemon2){
          console.log("They are the same pokemons...")
          return 0;
        }

         data = response.data
         data.forEach(element => {
             if(element.pokemon_name===name1 && element.form==="Normal" || element.pokemon_name===name2 && element.form==="Normal"){
                 result.push(element)     
             }
         });
         if(result.length<2){
            return console.log("IT SEEMS THE NAMES YOU ENTERED ARENT CORRECT")
         }
        result.forEach(element=>{
            console.log(`
Pokemon  :  ${element.pokemon_name},
Stamina   :  ${element.base_stamina}
                          `)
        })
        firstPokePoints = result[0].base_stamina
        secondPokePoints = result[1].base_stamina
        if(firstPokePoints>secondPokePoints){
          console.log(`${result[0].pokemon_name} is better when compared with ${result[1].pokemon_name} in terms of stamina`)
        }
        else{
          console.log(`${result[1].pokemon_name} is better when compared with ${result[0].pokemon_name} in terms of stamina`)
        }
    })
}