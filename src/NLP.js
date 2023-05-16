const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
manager.load('../model/model.nlp')
const Predict = async (input)=>{
   const result = await manager.process('en',input)
   const {intent} = result
   return intent
}
module.exports = {Predict}