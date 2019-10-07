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

async function mainFullExample() {
    manager.addDocument('en', 'My mail is %email%', 'email');
    manager.addDocument('en', 'My email is %email%', 'email');
    manager.addDocument('en', 'Here you have my email: %email%', 'email');
    manager.addDocument('en', 'Hello', 'greet');
    manager.addDocument('en', 'Good morning', 'greet');
    manager.addDocument('en', 'good afternoon', 'greet');
    manager.addDocument('en', 'good evening', 'greet');
    manager.addAnswer('en', 'email', 'Your email is {{email}}');
    manager.addAnswer('en', 'greet', 'Hi!');
    await manager.train();
    let result = await manager.process('en', 'I think that my mail is meh@meh.com');
    console.log(result);
    result = await manager.process('en', 'Hello bot!');
    console.log(result);
  }
  

mainExtractEntities();