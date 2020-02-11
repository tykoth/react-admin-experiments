const { NlpManager } = require('node-nlp');

async function main() {
  const manager = new NlpManager({ languages: ['en'] });
  const result = await manager.process('Hy my name is Thiago, im from Cubatão Brazil, my email is tykoth@gmail.com.');
  console.log(result);
}

main();