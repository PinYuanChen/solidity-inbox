// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // the constructor
const web3 = new Web3(ganache.provider()) // the instance

beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts()
        .then( fetchedAccounts => {
            console.log(fetchedAccounts);
        });
    // Use one of those accounts to deploy a contract
});

describe('Inbox', () => {
    it('deploy a contract', () => { });
});