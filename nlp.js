const {inputReader} = require('competitive-programming-js');
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });

console.log('Hi, I am your virtual Assistant, Can you please verify your details for me?');

async function mainExtractEntities() {
    let text = inputReader.readLine();
    var result = await manager.extractEntities('en', text);
    console.log('Thank you for registering!');
    console.log('Your details are:');
    result.forEach(element => {
        console.log(element.resolution.value);
    });
}

mainExtractEntities();