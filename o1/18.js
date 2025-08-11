//maps
const map = new Map();

map.set('name', 'kush')
map.set('age', 25);
map.set('isActive', true);  

console.log(map.get('name')); // Output: kush
console.log(map.get('age')); // Output: 25
console.log(map.get('isActive')); // Output: true
console.log(map.has('name')); // Output: true
console.log(map.has('sex')); // Output: false
console.log(map.size); // Output: 3
console.log(map.keys()); 
console.log(map.values()); 
console.log(map.delete('age')); // Output: true
console.log(map.size); // Output: 2


