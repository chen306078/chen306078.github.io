// 在命令提示字元裡打 node + 檔名 即可看當前狀況
console.log('hello js');

var a = 1;
a += 6;
console.log(a);

//注意兩個等號和三個等號的區別
console.log('3 == 6');
console.log(3 == 6);
console.log('3 == \'3\'');
console.log(3 == '3');
console.log('3 === \'3\'');
console.log(3 === '3');

var b = 'hello';
b += ' world';
console.log(b);

var numbers = [1, '123', {name:'ben'}];
var person = {name:'ben'};
person.gender = 'male';
console.log(numbers);
console.log(person);

for(var i=1 ; i<=5 ; i++){
	console.log(i);
}
// i 還在，因為是 function scope (java 是 blog scope)
console.log(i);

var c = 1;
var d = 2;
function add(a, b){
	var c = 7;
	return a + b;
	console.log(c);
}
console.log(add(3, 6));
console.log(c);
