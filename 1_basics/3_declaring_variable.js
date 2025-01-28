/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 * 실전에서는 let과 const?
 * 
 */

var name = '자바스크립트 짱';
console.log(name);

var age = '26';
console.log(age);

let wtf = '내가 벌써 26살이라니';
console.log(wtf);

/**
 * let과 var로 선언하면 값을 추후에 변경할 수 있다.
 */

wtf = '흑흑';
console.log(wtf);

const wow = '우와!';
console.log(wow);

// wow = '우하하!'; (변경 안 됨, 에러 발생)

/**
 * 선언과 할당 var name;
 * 
 * 1) 변수를 선언하는 것
 * 2) 할당 var name = '~~';
 */

let girlfriend;
console.log(girlfriend); //값이 할당 되지 않으면 undefined가 출력 된다.

// const girlfriend2; //var, let은 값이 바뀌어도 되니까 할당이 되지 않아도 오류가 발생하지 않는데, const는 나중에 값을 못 바꾸니 오류가 발생함.