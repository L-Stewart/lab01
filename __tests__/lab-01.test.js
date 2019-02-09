'use strict';

//Lorin - Test module files.
// const arithmetic = require('../lib/arithmetic.js');
const greet = require('../lib/greet.js');

//Lorin - load npm packages.
const faker = require('faker');

describe('#demo.test.js', () => {
  // Vinicio - here, we'll write all our tests
  test('These are the basics of TDD', () =>{
    // ARRANGE
    const aNumber = 5;
    const aNullValue = null;
    const fifty = 50;

    // ACT
    // Vinicio - no act, because we are just showing basics

    // ASSERT
    expect(aNumber).toEqual(5);
    expect(fifty).toBeLessThan(100);
    expect(fifty).toBeGreaterThan(10);
    expect(aNullValue).toBeNull();
    const firstArgument = faker.random.number();
    const secondArgument = faker.random.number();
    // expect(myModule.myFunction(firstArgument, secondArgument).toEqual(firstArgument + secondArgument));
  });

  test('Showcasing how to add another test ', () => {
    //ARRANGE
    const aTruthyValue = 'hi';
    const aFalsyValue = 0;

    //ACT :(

    //ASSERT
    expect(aTruthyValue).toBeTruthy();
    expect(aFalsyValue).toBeFalsy();
    expect(aTruthyValue).not.toBeFalsy();
  });

  test('greet.sayHi should say hello if the input type is a string, otherwise it will return null', () => {
    // ARRANGE :(
    // ACT
    const returnValue = greet.sayHi('world');
    const testNull = greet.sayHi(123);
    const testNumStr = greet.sayHi('123');

    // ASSERT

    expect(returnValue).toEqual('Hello world.');
    expect(testNull).toEqual(null);
    expect(testNumStr).toEqual('Hello 123.');
  });
});