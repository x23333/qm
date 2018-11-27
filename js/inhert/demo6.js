let A = { name: 'a'}; // json object
let B = { age: 21 };
let C = { hobby: '戏'};

A._proto_ = B;
B._proto_ = C;

console.log(A.name, A.age, A.hobby)

