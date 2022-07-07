/* Base */
    pincel.fillStyle = 'blue';	
	pincel.fillRect(150, 310, 350, 10);  //Base
	pincel.fillRect(180, 0, 10, 320);
	pincel.fillRect(150, 0, 200, 10);
	pincel.fillRect(300, 0, 10, 50);	
    pincel.fill();
	pincel.closePath();
	
	/* Desenhar a cabeça */
function desenharCabeca(){
	pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(305, 80, 30, 0, 2 * 3.14);
    pincel.fill();
	
	pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.arc(305, 80, 29, 0, 2 * 3.14);
    pincel.fill();
	pincel.closePath();
}
	
	/* Corpo */
function desenharCorpo(){
	pincel.beginPath();
	pincel.fillStyle = 'blue';	
	pincel.fillRect(302, 110, 5, 100);	
	pincel.fill();	
	pincel.closePath();	
}

	/* Braço direito */
function desenharBracoDireito(){
	pincel.beginPath();
	pincel.strokeStyle = "blue";
	pincel.lineWidth = 3;
	pincel.moveTo(302, 110);	
    pincel.lineTo(270, 180);
	pincel.stroke();
	pincel.closePath();
	pincel.closePath();
}
	
	/* Braço esquerdo */
function desenharBracoEsquerdo(){
	pincel.beginPath();
	pincel.strokeStyle = "blue";
	pincel.lineWidth = 3;
	pincel.moveTo(307, 110);	
    pincel.lineTo(350, 180);
	pincel.stroke();
	pincel.closePath();
}
	
	/* Pé direito */
function desenharPeDireito(){
	pincel.beginPath();
	pincel.strokeStyle = "blue";
	pincel.lineWidth = 3;
	pincel.moveTo(304, 207);	
    pincel.lineTo(270, 280);
	pincel.stroke();
	pincel.closePath();
}
	/* Pé esquerdo */
function desenharPeEsquerdo(){
	pincel.beginPath();
	pincel.strokeStyle = "blue";
	pincel.lineWidth = 3;
	pincel.moveTo(304, 207);	
    pincel.lineTo(350, 280);
	pincel.stroke();
	pincel.closePath();
}

function escreverVoPerdeu(){
	pincel.font = "30px arial";
	pincel.fillText("VOCÊ PERDEU!!!", 400, 200);
}

function escreverVoGanhou(){
	pincel.font = "30px arial";
	pincel.fillText("VOCÊ GANHOU!!!", 400, 200);
}

function desenharCorpoTodo(){
	
	var x = 0;
	
	if(ContadorPalavraErrada == 1){
		desenharCabeca();
	} else if(ContadorPalavraErrada == 2){
		desenharCorpo();
	} else if(ContadorPalavraErrada == 3){
		desenharBracoDireito();
	}else if(ContadorPalavraErrada == 4){
		desenharBracoEsquerdo();
	}else if(ContadorPalavraErrada == 5){
		desenharPeDireito();
	}else if(ContadorPalavraErrada == 6){
		desenharPeEsquerdo();	
		escreverVoPerdeu();
	}
}



















