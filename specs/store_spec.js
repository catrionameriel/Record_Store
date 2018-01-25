const assert = require('assert');
const Record = require('../Record.js');
const Store = require('../Store.js');

describe('Record', function(){

var record;
var record1;
var record2;
var store;

  beforeEach(function(){

    record = new Record("Semisonic", "Chemistry", "Indie", 12);
    record1 = new Record("Biffy Clyro", "Blackened Sky", "Emo", 12.50);
    record2 = new Record("The Cheeky Boys", "Double Entendre", "Emo", 2.50);
    store = new Store("The Disc Jockey's Repose", "Belfast")
  })

  it("array starts emppty", function(){
  assert.strictEqual(store.inventory.length, 0);
  })

  it("balance starts at zero", function() {
    assert.strictEqual(store.balance, 0);
  })

  it("can add to inventory", function() {
    store.addRecord(record1);
    assert.strictEqual(store.inventory.length, 1);
  })

  it("can list inventory", function(){
    store.addRecord(record);
    assert.deepEqual(store.listInventory(store.inventory),  [ 'Artist: Semisonic, Title: Chemistry, Genre: Indie, Price: 12' ])
  })

  it("sell record", function(){
    store.addRecord(record);
    store.addRecord(record1);
    store.sell(record);
    assert.strictEqual(store.balance, 12);
    assert.strictEqual(store.inventory.length, 1);
  })

  it("can get finances", function(){
    store.addRecord(record);
    store.addRecord(record1);
    store.sell(record);
    assert.strictEqual(store.getFinances(), "Balance: £12, Inventory value: £12.5");
  })

  it("by genre prints", function(){
    store.addRecord(record);
    assert.deepEqual(store.byGenre("Indie"),[ 'Artist: Semisonic, Title: Chemistry, Genre: Indie, Price: 12' ] )

  })
})
