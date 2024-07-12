const Stack = require('./stack');
const Queue = require('./queue');


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Stack');
stack.print(); 
console.log('Peek:', stack.peek()); 
console.log('Pop:', stack.pop()); 
console.log('Size:', stack.size()); 
stack.print(); 
stack.clear();
console.log('Size after clear:', stack.size());
stack.print(); 



const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('\nQueue');
queue.print();
console.log('Front:', queue.front());
console.log('Dequeue:', queue.dequeue());
console.log('Size:', queue.size());
queue.print();
queue.clear();
console.log('Size after clear:', queue.size());
queue.print();
