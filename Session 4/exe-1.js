// ========= React Flow =========
 let reactFlow = {
  value: 0,
  add: function() {
    this.value = this.value + 1;
    return this.value;
  },
  minus: function() {
    this.value = this.value - 1;
    return this.value;
  },
};
console.log(reactFlow.value);
reactFlow.add();
console.log(reactFlow.value);
reactFlow.minus();
console.log(reactFlow.value);