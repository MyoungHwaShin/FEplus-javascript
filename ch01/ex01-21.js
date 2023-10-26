// 구조 분해 할당
var colors = ['yellow', 'green', 'blue'];
var [one, two, three, four] = colors;
console.log(one,two,three,four);



var kim = { userName: '김철수', userAge: 35 };
console.log(kim.userName, kim.userAge);
var {userAge:age, userName} = kim;
console.log(userName,age);

// 선언된 변수에 적용
var first, second;
[first, second] = [100,200,300];
console.log(first, second);
({first, second} = {first: 'orange', second:'green', third:'yellow'}) ;
console.log(first, second);
// 기본값 할당(undefined 대체)

// 변수명 변경과 기본값 할당

// 변수값 교환

// 변수값 교환(구조 분해 할당)

// 복합 객체에서 사용
var userList = [
  {
    name: '김철수',
    age: 30,
    course: {
      name: '멋사 6기'
    }
  },
  {
    name: '이영희',
    age: 35,
    course: {
      name: '멋사 8기'
    }
  }
];

// 이름과 코스명만 출력
