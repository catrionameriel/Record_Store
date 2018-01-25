const assert = require('assert');
const Record = require('../Record.js');
const Store = require('../Store.js');
const Customer = require('../Customer.js');



describe('Record', function(){

var record;
var record1;
var record2;
var store;
var customer;

  beforeEach(function(){

    record = new Record("Semisonic", "Chemistry", "Indie", 12);
    record1 = new Record("Biffy Clyro", "Blackened Sky", "Emo", 12.50);
    record2 = new Record("The Cheeky Boys", "Double Entendre", "Emo", 2.50);
    store = new Store("The Disc Jockey's Repose", "Belfast");
    customer = new Customer("Harry McHipster", 25);
    customer1 = new Customer("Poory McPoorison", 3);
  })

  it("can buy first record", function() {
    store.addRecord(record);
    customer.buyRecord(store, record);
    assert.strictEqual(customer.cash, 13);
    assert.strictEqual(customer.collection.length, 1);
  })

  it("can sell record", function() {
    store.addRecord(record);
    customer.buyRecord(store, record);
    customer.sellRecord(record);
    assert.strictEqual(customer.cash, 25);
    assert.strictEqual(customer.collection.length, 0);
})

  it("can't buy first record", function() {
    store.addRecord(record);
    customer1.buyRecord(store, record);
    assert.strictEqual(customer1.cash, 3);
    assert.strictEqual(customer.collection.length, 0);
  })

  it("can get total value of collection", function() {
    store.addRecord(record);
    store.addRecord(record1);
    customer.buyRecord(store, record);
    customer.buyRecord(store, record1);
    assert.strictEqual(customer.getTotalOfCollection(), 24.5);
  })

})
