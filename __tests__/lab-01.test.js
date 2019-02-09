'use strict';

//Lorin - Test module files.
// const arithmetic = require('../lib/arithmetic.js');
const greet = require('../lib/greet.js');
const math = require('../lib/math.js');

//Lorin - load npm packages.
const faker = require('faker');

describe('#demo.test.js', () => {
  //  Lorin- demo code from Vinicio
    // // Vinicio - here, we'll write all our tests
    // test('These are the basics of TDD', () =>{
    //   // ARRANGE
    //   const aNumber = 5;
    //   const aNullValue = null;
    //   const fifty = 50;
    //
    //   // ACT
    //   // Vinicio - no act, because we are just showing basics
    //
    //   // ASSERT
    //   expect(aNumber).toEqual(5);
    //   expect(fifty).toBeLessThan(100);
    //   expect(fifty).toBeGreaterThan(10);
    //   expect(aNullValue).toBeNull();
    //   const firstArgument = faker.random.number();
    //   const secondArgument = faker.random.number();
    //   // expect(myModule.myFunction(firstArgument, secondArgument).toEqual(firstArgument + secondArgument));
    // });
    //
    // test('Showcasing how to add another test ', () => {
    //   //ARRANGE
    //   const aTruthyValue = 'hi';
    //   const aFalsyValue = 0;
    //
    //   //ACT :(
    //
    //   //ASSERT
    //   expect(aTruthyValue).toBeTruthy();
    //   expect(aFalsyValue).toBeFalsy();
    //   expect(aTruthyValue).not.toBeFalsy();
    // });

  test('math.add/subtract should complete if the input is aa number', () => {
    //ARRANGE :(
    //ACT
    const add = math.add(1, 2);
    const addNull = math.add(1, 'd');
    const subtract = math.subtract(1, 2);
    const subtractNull = math.subtract(3, 'w');

    //ASSERT
    expect(add).toEqual(3);
    expect(addNull).toEqual(null);
    expect(subtract).toEqual(-1);
    expect(subtractNull).toEqual(null);

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