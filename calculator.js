$(function(){

	var numberMemory = 0;
	var numberText = 0;
	var numberCount = 0;
	var operator = '○';
	var currentText = '';

	function isZero(){
		if (currentText=='0') {
			currentText = '';
		};
	}

	function render(){
		$('#message').text(currentText);
		$('#operator').text(operator);
	}

	function operatorRender(){
		$('#operator').text(operator);
	}

	function enterNumber(number){
		isZero();
		currentText += number;
		render();
	}

	function enterOperator(operatorLast){
		if (operator == '○') {
			numberMemory = parseInt(currentText);
			operator = operatorLast;
			render();
			currentText = '';
		}
		else if (currentText == '') {
			operator = operatorLast;
			operatorRender();
		}
		else {
			calculateAnswer(operatorLast);
		};
	}

	function calculateAnswer(operatorLast){
		if (numberCount != 0) {
			numberMemory = parseInt(currentText);
			operator = operatorLast;
			render();
			currentText = '';
			numberCount = 0;
		}
		else {
			switch (operator) {
			case '+':
				numberMemory += parseInt(currentText);
				break; 
			case '-':
				numberMemory -= parseInt(currentText);
				break;
			case '*':
				numberMemory *= parseInt(currentText);
				break;
			case '/':
				numberMemory /= parseInt(currentText);
				break;
			}
			currentText = numberMemory;
			operator = operatorLast;
			render();
			currentText = '';
		};
	}

	function clear(){
		numberMemory = 0;
		numberText = 0;
		numberCount = 0;
		operator = '○';
		currentText = '0';
		render();
	}

	$(btn0).on('click', function(){	enterNumber(0);	});
	$(btn1).on('click', function(){	enterNumber(1);	});
	$(btn2).on('click', function(){	enterNumber(2);	});
	$(btn3).on('click', function(){	enterNumber(3);	});
	$(btn4).on('click', function(){	enterNumber(4); });
	$(btn5).on('click', function(){	enterNumber(5);	});
	$(btn6).on('click', function(){	enterNumber(6);	});
	$(btn7).on('click', function(){	enterNumber(7);	});
	$(btn8).on('click', function(){	enterNumber(8);	});
	$(btn9).on('click', function(){	enterNumber(9);	});

	$(btnPlus).on('click', function(){ enterOperator('+'); });
	$(btnMinus).on('click', function(){ enterOperator('-');	});
	$(btnTimes).on('click', function(){ enterOperator('*'); });
	$(btnDevide).on('click', function(){ enterOperator('/'); });

	$(MPlus).on('click', function(){ alert('Not ready!'); });
	$(MMinus).on('click', function(){ alert('Not ready!'); });
	$(MR).on('click', function(){ alert('Not ready!'); });
	$(MC).on('click', function(){ alert('Not ready!'); });

	$(btnIs).on('click', function(){
		if (operator == '○') {

		}
		else if (currentText == '' && numberCount == 0) {
			//first time
			numberText = numberMemory;
			switch (operator) {
			case '+':
				currentText = numberMemory + numberText;
				break; 
			case '-':
				currentText = numberMemory - numberText;
				break;
			case '*':
				currentText = numberMemory * numberText;
				break;
			case '/':
				currentText = numberMemory / numberText;
				break;
			}
			currentText.toString();
			render();
			numberCount ++;
		}
		else {
			//first time
			if (numberCount == 0) {
				numberText = parseInt(currentText);
				switch (operator) {
				case '+':
					currentText = numberMemory + numberText;
					break; 
				case '-':
					currentText = numberMemory - numberText;
					break;
				case '*':
					currentText = numberMemory * numberText;
					break;
				case '/':
					currentText = numberMemory / numberText;
					break;
				}
				currentText.toString();
				render();
				numberCount ++;
			}
			//second time
			else {
				switch (operator) {
				case '+':
					currentText = parseInt(currentText) + numberText;
					break; 
				case '-':
					currentText = parseInt(currentText) - numberText;
					break;
				case '*':
					currentText = parseInt(currentText) * numberText;
					break;
				case '/':
					currentText = parseInt(currentText) / numberText;
					break;
				}
				currentText.toString();
				render();
			};
		};
	});

	$(back).on('click', function(){
		var currentTextTemp = '';
		if (numberCount != 0) {
			clear();
		}
		else {
			for (var i = 0 ; i <= currentText.length - 2 ; i++) {
				currentTextTemp += currentText.charAt(i);
			};
			currentText = currentTextTemp;
			if (currentText =='') {
				currentText += 0;
			};	
			render();
		};
	});

	$(btnClear).on('click', function(){ clear(); });

} );

// 在命令提示字元裡打 npm install bower -g 即可安裝？
// bower init
// 一直 enter

// http://jquery.com/
//download
//在 Using jQuery with a CDN 複製第一行

/*
	$('#btn1').on('click', function(){
		// alert('hello jquery');
		// $('#message').text('吃午餐');
		// $('#message').addClass('green');
		currentText += '1';
		render();
	});
*/
