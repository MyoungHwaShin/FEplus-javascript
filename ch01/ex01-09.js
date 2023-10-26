// 배열 생성
var arr = [300, 400];
// push: 배열의 마지막에 새로운 요소 추가.
arr[2] = 100;// 새로 추가됨
arr.push(600);
// unshift: 배열의 처음에 새로운 요소 추가. 
arr[0] = 200;// 기존값 대체됨
arr.unshift(150);//맨 앞에 추가하겠노라
arr.unshift(1000);//무조건 맨 앞에 추가
// pop: 배열의 마지막 요소를 제거 후 반환
console.log(arr[arr.length-1]);//단순히 마지막 숫자를 출력
console.log(arr.pop()); // 마지막제거 후 제거됨 마지막 숫자를 출력
// shift: 배열의 첫번째 요소를 제거 후 반환
console.log(arr.shift());
console.log(arr.shift());
console.log(arr);