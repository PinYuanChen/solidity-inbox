// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const { it } = require('mocha');
const Web3 = require('web3'); // the constructor
const web3 = new Web3(ganache.provider()) // the instance
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!'

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()
        
    // Use one of those accounts to deploy a contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploy a contract', () => { 
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        // calling a function without modify data
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING)
    });

    it('can change the message', async () => {
        // sending a transaction and modify the data
        await inbox.methods.setMessage('bye').send( { from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});
