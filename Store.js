const Store = function(name, city){
  this.balance = 0;
  this.inventory = [];
  this.name = name;
  this.city = city;

}

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.listInventory = function (array) {
  var string = [];
  array.forEach(function(element){
    string.push(element.details());
  })
  return string;
};

Store.prototype.sell = function (record) {
  var deleted= this.inventory.splice(this.inventory.indexOf(record), 1);
  this.balance += deleted[0].price;
  return deleted[0];
};

Store.prototype.getFinances = function () {
  let reducer = function(current, next) {
    return current + next.price;
  }
  let inventoryValue = this.inventory.reduce(reducer, 0);
  return `Balance: £${this.balance}, Inventory value: £${inventoryValue}`;
};

Store.prototype.byGenre = function (genre) {
  var genre = this.inventory.filter(function(element){
    return element.genre == genre;
  })
  return this.listInventory(genre);
};

module.exports = Store;
