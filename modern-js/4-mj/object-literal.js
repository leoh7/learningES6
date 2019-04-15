// 4.1.2 객체 리터럴을 사용해 객체 생성
var card = {
  suit: "하트",
  rank: "A",
};

console.log(card.suit);     // 하트
console.log(card["rank"]);  // A
console.log(card.color);    // undefined

var obj = {};
console.log(obj); // {}

// 4.1.3 프로퍼티 추가와 삭제
// 없는 프로퍼티 이름에 값을 대입하면 새로운 프로퍼티가 추가됨
card.value = 14;
console.log(card);          // { suit: '하트', rank: 'A', value: 14 }
delete card.value;
console.log(card);          // { suit: '하트', rank: 'A' }
