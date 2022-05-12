function Dictionary() {
  const items = {};
  this.has = (key) => key in items;
  this.set = (key, value) => (items[key] = value);
  this.size = () => Object.keys(items).length;
  this.delete = (key) => {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };
  this.get = (key) => (this.has(key) ? items[key] : undefined);
  this.values = () => {
    const values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };
  this.keys = () => Object.keys(items);
  this.getItems = () => items;
}

module.exports = Dictionary;
