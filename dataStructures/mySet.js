function Set() {
  let items = {};
  this.has = (value) => items.hasOwnProperty(value);
  // Also can be: return value in items;
  this.add = (value) => {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };
  this.delete = (value) => {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };
  this.clear = () => {
    items = {};
  };
  this.size = () => Object.keys(items).length;
  this.sizeLegacy = () => {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key)) ++count;
    }
    return count;
  };
  this.values = () => {
    let values = [];
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };
  this.valuesLegacy = () => {
    let values = [];
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };
  //Set Union AuB
  this.union = (otherSet) => {
    let unionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  //Set Intersection AnB
  this.intersection = (otherSet) => {
    let intersectionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
  //Set Difference A-B
  this.difference = (otherSet) => {
    let differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };
  //Set Subset AcB
  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

module.exports = Set;
