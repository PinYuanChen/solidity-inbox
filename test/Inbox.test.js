// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // the constructor
const web3 = new Web3(ganache.provider()) // the instance

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vrooom';
    }
}

let car;

beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
   it('can park', () => {
    assert.equal(car.park(), 'stopped');
   }); 

   it('can drive', () => {
    assert.equal(car.drive(), 'vrooom');
   });
});