//object에서 생성자함수를 만들엇
var foo = new Object(); // 생성자로 빈객체생성
foo['age'] = 30;
foo.job ='student';
foo['married'] = false;
console.log(foo['name'], foo.age, foo.job, foo['married']);
console.log(typeof foo, foo);