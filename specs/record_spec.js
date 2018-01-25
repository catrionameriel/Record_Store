const assert = require('assert');
const Record = require('../Record.js');

describe('Record', function(){


  it("initialises ok", function(){
  record = new Record("Semisonic", "Chemistry", "Indie", 12);
  assert.strictEqual(record.artist, "Semisonic");
  assert.strictEqual(record.title, "Chemistry");
  assert.strictEqual(record.genre, "Indie");
  assert.strictEqual(record.price, 12);
  })

  it("can get properties as string", function() {
    record = new Record("Semisonic", "Chemistry", "Indie", 12);
    assert.strictEqual(record.details(), "Artist: Semisonic, Title: Chemistry, Genre: Indie, Price: 12");
  })


})
