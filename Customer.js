const Customer = function(name, balance){
  this.name = name;
  this.collection = [];
  this.cash = balance;
}

Customer.prototype.buyRecord = function (store, record) {
  if (this.canAfford(record.price)) {
  var price = store.sell(record);
  this.collection.push(price);
  this.cash -= price.price;
  }
};

Customer.prototype.canAfford = function (price) {
  return (this.cash >= price);
};

Customer.prototype.sellRecord = function (record) {
  let recordToSell = this.collection.splice(this.collection.indexOf(record), 1);
  this.cash += recordToSell[0].price;
  return recordToSell[0];
};

module.exports = Customer;
