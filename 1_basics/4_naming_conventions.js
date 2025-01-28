/**
 * 
 * Naming Conventions(변수명 짓는 룰)
 * 
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
 * 2) 특수기호는 언더스코어와 달러를 사용 할 수 있다.
 * 3) 숫자로 이름을 시작 할 수 없다.
 *    1name, 2hello
 * 4) 키워드는 변수명으로 사용 할 수 없다.
 *    var const = 'var'; 
 */

let codeFactory = '코드팩토리';
var $ive = '아이브';
const _yujin = '안유진';

console.log(codeFactory);
console.log($ive);
console.log(_yujin);

// let 1name = 'no';
// let const = 'hi';

/**
 * Naming Convention 2
 * 
 * 1) camelCase -> 첫번째 글자는 소문자, 이후 띄어쓰기 마다 대문자로 사용(대부분의 언어에서 사용)
 * 2) snake_case -> 띄어쓰기가 있는 경우에는 언더스코어로 사용
 * 3) PascalCase -> 첫번째 글자까지 대문자, C# 마이크로소프트 계열의 언어에서 사용함.
 * 카멜케이스를 추천 함.
 */

const dayOfTheWeek = 'tuesday';
console.log(dayOfTheWeek);