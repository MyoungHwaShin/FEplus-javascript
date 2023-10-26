var foo = {
  'name': 'lee',
  age : 35,
  job: 'teacher',
  "married" : true

}; //new 랑 같애 // 공식으로는 싱글 따옴표가 아닌 "" 더블 사용해야함 대쉬같은 특수문자가 들어갈때고 더블""

console.log(foo['name'], foo.age, foo.job, foo['married']);
console.log(typeof foo, foo);

var strFoo = JSON.stringify(foo);
console.log(typeof strFoo, strFoo, strFoo.age);

var objFoo = JSON.parse(strFoo);
console.log(typeof objFoo, objFoo.age);
