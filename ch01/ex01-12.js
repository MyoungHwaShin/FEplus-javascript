// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr = {
  0: 'orange',
  1: 'yellow', 
  2: 'green',
  length: 3,
  push: function(elem){
    // 맨뒤에 지정한 elem를 추가한다.
    // length를 1 증가시킨다.
    arr[arr.length] = elem;
    arr.length++;
  },
  shift: function(){
    // 첫번째 요소를 삭제하고 반환한다.
    // length를 1 감소시킨다.
    var first = arr[0];
    for(var i=0; i<arr.length-1; i++){
      arr[i] = arr[i+1];
    }
    arr.length--;
    delete arr[arr.length];
    return first;
  },
  pop: function(){
    // 마지막 요소를 삭제후 반환
    // length 1 감소
    var last = arr[arr.length-1];
    arr.length--;
    delete arr[arr.length];
    return last;
  }
};
arr.push('black');
arr.push('white');
console.log(arr.shift());
console.log(arr.pop());
printArr(arr);
// 0 orange
// 1 yellow
// 2 green
