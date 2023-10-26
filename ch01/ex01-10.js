var stack = [];
//100,200,300, 저장
console.log(stack.push(100,200,300));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
//300,200,100 출력

var queue = [];
//100,200,300, 저장
console.log(queue.push(100,200,300));

//100,200,300 출력
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(stack, queue);