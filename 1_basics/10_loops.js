/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i=0; i<10; i++) {
    console.log(i);
}

console.log('------')
for(let i=10; i>0; i--) {
    console.log(i);
}

console.log('------')
for(let i=0;i<3;i++) {
    for(let j=3; j>0; j--) {
        console.log(i,j);
    }
}

console.log('------')
// *을 이용해서 6*6의 정사각형을 출력해라.
let square ='';
let side = 6;

for(let i = 0; i < side; i++) {
    for(let j=0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in
 */

const yujin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yujin) {
    console.log(key);
}

const iveMembersArray =['안유진','가을','레이','장원영','리즈','이서'];

console.log('-----');

for(let key in iveMembersArray) {
    console.log(key);
}