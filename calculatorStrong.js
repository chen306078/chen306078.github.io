$(function(){

    var sumMemory = 0;
	var numberMemory = 0;
	var operator = 'o';
	var currentText = '0';
	var flg_lastEnter ='';

	function render(){
		$('#message').text(currentText);
		$('#operator').text(operator);
	}

	function enterNumber(number){
		if (flg_lastEnter == "=") {
			enterClear();
		}
		if (currentText == '0'){
		    currentText = '';
		}
		if (flg_lastEnter == "operator") {
			currentText = '';
		}
		flg_lastEnter = "number";
	    currentText += number; 
		numberMemory = parseInt(currentText);
		
		render();
	}
	
	function enterOperator(operatorLast){
		if (flg_lastEnter == "number") {
			enterEqu();
		}
		operator = operatorLast;
		flg_lastEnter = "operator";
		render();	
	}
	
	function enterEqu(){
		calculateAnswer();
		currentText = sumMemory;
	    flg_lastEnter = "=";
		render();	
	}

	function calculateAnswer(){		
		switch (operator) {
		case '+':
			sumMemory += numberMemory;
			break;
		case '-':
            sumMemory -= numberMemory;
		    break;
		case '*':
            sumMemory *= numberMemory;
		    break;
		case '/':
            sumMemory /= numberMemory;
		    break;
		case 'o':
            sumMemory  = numberMemory;
		    break;	
		}
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
	$(btnIs).on('click', function(){ enterEqu(); });

	$(MPlus).on('click', function(){ alert('Not ready!'); });
	$(MMinus).on('click', function(){ alert('Not ready!'); });
	$(MR).on('click', function(){ alert('Not ready!'); });
	$(MC).on('click', function(){ alert('Not ready!'); });


	$(back).on('click', function(){
		var currentTextTemp = '';
		for (var i = 0 ; i <= currentText.length - 2 ; i++) {
				currentTextTemp += currentText.charAt(i);
		};
		currentText = currentTextTemp;
		if (currentText =='') {
			currentText += 0;
		};
		render();
	});

	$(btnClear).on('click', function(){ enterClear(); });

	function enterClear(){
        sumMemory = 0;
	 	numberMemory = 0;
	 	operator = 'o';
		currentText = '0';
		render();
		flg_lastEnter ='';
	}

} );