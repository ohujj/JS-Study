/**
 * If and Switch
 */


let number = 7;

if(number % 2 === 0) {
    console.log('number 변수는 짝수입니다.');
} else {
    console.log('number 변수는 홀수입니다.');
}

if(number % 2 === 0) {
    console.log('number 변수는 2의 배수입니다.');
} else if (number % 3 === 0){
    console.log('number 변수는 3의 배수입니다.');
} else if (number % 4 === 0){
    console.log('number 변수는 4의 배수입니다.');
} else if (number % 5 === 0){
    console.log('number 변수는 5의 배수입니다.');
} else if (number % 6 === 0){
    console.log('number 변수는 6의 배수입니다.');
} else {  // 모두 해당 되지 않을 때
    console.log('2,3,4,5의 배수가 아닙니다.');
}

const englishDay = 'monday';
let koreanDay;

switch(englishDay) {
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    default: // if문에서의 else같음
        koreanDay = '화요일';
        break;
}

console.log(koreanDay);