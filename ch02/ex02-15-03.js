// ex02-15.js 복사
var count = 0;
var counter = {
  count: 0,
  visit: function(){
    this.count++;
    var visit2 = ()=>{
      this.count++;
    }
    visit2();
  }
};

counter.visit();
counter.visit();
console.log('합계', counter.count);

var a = () => {
  console.log(this);
}