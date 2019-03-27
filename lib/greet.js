'use strict';

const greet = module.exports = {};

//Lorin- Demo code from class written by Vinicio

  // const secretValue = 'Kali is cute';
  // const superSecretValue = 'Kali is super cute';
  //
  // const discountXbox = () => {
  //   return 'Your xbox is now 5 dollars';
  // };

  // greet.sayHi = (name) => {
  //   return `Hello ${name}. Have you met my dog Khaleesi?`;
  // };


//  Lorin- This prototype takes an input and will return a response if the input is a string, otherwise the returned
//  value will be null if the input is not a string.
greet.sayHi = (greetString) => {
  if(typeof greetString === 'string'){
    return `Hello ${greetString}.`;
  }else{
    return null;
  }
};