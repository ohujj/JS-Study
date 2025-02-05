/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

console.log('-----------');

console.log(10 * (10+10));


/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('----------');

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);
console.log('---');
/**
 * 
 * 실제론 앞에 ++나 --를 쓰는 경우는 잘 없다고 한다.
 * 쓰면 선임한테 뒤통수 맞는다고 한다.(ㅋㅋㅋㅋ)
 */



/**
 * 숫자 타입이 아닌 타입에 +,-를 사용하면 어떻게 될까?
 */

let sample = '99'; // 이건 숫자 값이 아닌 문자값인 99
console.log(sample);
console.log(typeof sample);
console.log('---');
console.log(+sample);
console.log(typeof +sample);
console.log('---');
sample = true;
console.log(sample);
console.log(typeof sample)
console.log('---');
console.log(+sample);
console.log(typeof +sample);
console.log('---');
sample = false;
console.log(sample);
console.log(typeof sample)
console.log('---');
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample);
// 이 실행문의 결과는 NaN이 출력 되는데, NaN은 Not a Number다.

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);


number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

// 1)
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('---');

// 2)

console.log(5 === 5);
console.log(5 === '5'); //변환된 값은 둘다 5로 같지만, 타입이 Number와 String으로 다르기 때문에 false가 됨.
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
// 실제 실무에서는 무조건 ==보다는 ===로 쓰는 게 정답이다.


console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('---');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('---');

/**
 * 대소 관계 비교 연산자
 */

console.log(100>1);
console.log(100<1);
console.log(100>=1);
console.log(100<=1);
console.log('---');

/**
 * 삼항 조건 연산자(nernary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

// &&조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('---');

// ||조건은 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true && '오리');
console.log(false && '오리');
console.log(true || '오리');
console.log(false || '오리');

console.log(true && true && '오리');
console.log(true && false && '오리');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '오리';
console.log(name); //name이 null이거나 undefined일 때, '오리'를 출력해라, null 혹은 undefined가 아니면 할당 된 값을 출력해라.

// A = A ?? B는
// A ?= B라고도 사용 가능 하다.