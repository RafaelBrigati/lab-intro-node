class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item)
    this.length ++;
    return this.items.sort((a, b) => a-b);
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length > 0){
      return Math.max(...this.items);
    }
    else{
      if (this.length ===0){
        throw new Error('EmptySortedList');
      } 

    }
    
  }

  min() {
    if (this.length >0){
      return Math.min(...this.items);
    } else {
      if (this.length === 0){
        throw new Error('EmptySortedList');
      }

    }
    
  }

  sum() {
    if (this.items.length ===0){
      throw new Error('EmptySortedList');
    } else {
      if (this.items ===[]){
        return 0;
      }
    }
    let total = 0;
    this.items.forEach(element => {
      total +=element;
      
    })
    return total;
    
  }

  avg() {
    if (this.length > 0) {
      let result = this.sum() / this.length;
      return result;
    } else {
      if (this.items.length ===0){
        throw new Error('EmptySortedList');
      }

    }
    
  }
}

module.exports = SortedList;
