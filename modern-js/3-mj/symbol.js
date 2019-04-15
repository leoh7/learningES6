var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1 == sym2); // false

var HEART = Symbol('하트');
console.log(HEART.toString());  // Symbol(하트)

var sym1 = Symbol.for('club');
console.log(sym1);  //  Symbol(club)

var sym2 = Symbol.for('club');
console.log(sym2);  //  Symbol(club)
console.log(sym1 == sym2);  // true

var sym3 = Symbol('club');
console.log(Symbol.keyFor(sym1)); // club
console.log(Symbol.keyFor(sym3)); // undefined