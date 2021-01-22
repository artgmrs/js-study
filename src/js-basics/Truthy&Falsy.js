// Falsy = undefined, null, 0, false, '', NaN
// Truthy = !Falsy

let a1 = false || true;
console.log(a1); // true 

let a2 = false || 1;
console.log(a2); // 1 

let a3 = false || 1 || 'Arthur';
console.log(a3); // 1 - No Or ele pega o primeiro que for Truthy