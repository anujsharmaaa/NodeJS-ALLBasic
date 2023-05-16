//  install validator 
//  install chalk for  the color output in cmd 

const validator = require("validator");

// sol 
const ANSWER = validator.isEmail("anujsharma@dimail.com");  // Check Right And False 
console.log( ANSWER ? (ANSWER) : (ANSWER));   