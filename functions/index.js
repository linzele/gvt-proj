const functions = require('firebase-functions');
const { initializeApp } = require('firebase-admin/app')
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const { getAuth } = require("firebase-admin/auth");


const app = initializeApp();
const users = getAuth(app);



exports.addLa = functions.https.onCall( async(data,context)=>{

    try{
  
       let varOne = parseFloat(data.firstNumber);

       let varTwo = parseFloat(data.secondNumber);
       let sum = varOne + varTwo;

       return {result:sum}
  
    }
    catch(err)
    {
      console.log(err)
    }
  
  })


  exports.minusLa = functions.https.onCall( async(data,context)=>{

    try{
  
       let varOne = parseFloat(data.firstNumber);

       let varTwo = parseFloat(data.secondNumber);
       let sum = varOne - varTwo;

       return {result:sum}
  
    }
    catch(err)
    {
      console.log(err)
    }
  
  })



  exports.multiplyLa = functions.https.onCall(async (data, context) => {
    try {
        let varOne = parseFloat(data.firstNumber);
        let varTwo = parseFloat(data.secondNumber);
        let sum = varOne * varTwo;

        return {result:sum};
    } catch (err) {
        console.log(err);
    }
});

  // division (bonus)

exports.divideLa = functions.https.onCall(async (data, context) => {
  try {
      let varOne = parseFloat(data.firstNumber);
      let varTwo = parseFloat(data.secondNumber);

    
      let sum = varOne / varTwo;

      return {result:sum};
  } catch (err) {
    console.log(err);
    throw new functions.https.HttpsError('invalid-argument', err.message);
}})


exports.operationsEval = functions.https.onCall(async (data, context) => {
    try {
      // Evaluate the expression in the display
      const evalResult = eval(data.display);
      return evalResult;
    } catch (error) {
      setDisplay('Error');
    }
  })