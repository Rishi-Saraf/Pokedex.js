#!/usr/bin/env node
const program = require("commander")
const pokedex = require('./pokedex')
const {prompt} = require('enquirer')

const inputQuestions = [
    {
        type : 'input',
        name : 'pokemon',
        message : 'Please enter the name of the pokemon : '
    }
] 

program
    .version('1.0.0')
    .description("A pokedex for pokemon go fans")

program
    .command('show',{isDefault : true})
    .alias('stats')
    .alias('s')
    .description("Shows the stats of the pokemon")
    .action(()=>{
        prompt(inputQuestions)
        .then(answers=>{
            let pokemon = answers.pokemon 
            pokedex.getPokemonById(pokemon)
            }        
        )
        .catch(err=>console.log(err))
    })

const compareQuestions = [
        {
            type : 'input',
            name : 'pokemonOne',
            message : 'Please enter the name of the first pokemon : '
        },
        {
            type : 'input',
            name : 'pokemonTwo',
            message : 'Please enter the name of the second pokemon : '
        }
    ] 
program
    .command('compare')
    .alias('battle')
    .alias('c')
    .option('-attack,-a','Compares the attacks of the two pokemons')
    .option('-defense,-d','Compares the defenses of the two pokemons')
    .option('-stamina,-s','Compares the staminas of the two pokemons')
    .description("Compares the stats of the pokemon")
    .action((cmdObject)=>{
        if(cmdObject.parent.args[1]==='-a'||cmdObject.parent.args[1]==="-attack"){
            prompt(compareQuestions)
            .then(answers=>{
                let pokemonOne = answers.pokemonOne
                let pokemonTwo = answers.pokemonTwo
                pokedex.compareAttack(pokemonOne,pokemonTwo)
            })
            .catch(err=>console.log(err))
        }
        else if(cmdObject.parent.args[1]==='-d'||cmdObject.parent.args[1]==="-defense"){
            prompt(compareQuestions)
            .then(answers=>{
                let pokemonOne = answers.pokemonOne
                let pokemonTwo = answers.pokemonTwo
                pokedex.compareDefense(pokemonOne,pokemonTwo)
            })
            .catch(err=>console.log(err))
        }
        else if(cmdObject.parent.args[1]==='-s'||cmdObject.parent.args[1]==="-stamina"){
            prompt(compareQuestions)
            .then(answers=>{
                let pokemonOne = answers.pokemonOne
                let pokemonTwo = answers.pokemonTwo
                pokedex.compareStamina(pokemonOne,pokemonTwo)
            })
            .catch(err=>console.log(err))
        }
        else{
            prompt(compareQuestions)
            .then(answers=>{
                let pokemonOne = answers.pokemonOne
                let pokemonTwo = answers.pokemonTwo
                pokedex.compareOverall(pokemonOne,pokemonTwo)
            })
            .catch(err=>console.log(err))
        }
    })

program.parse(process.argv)
