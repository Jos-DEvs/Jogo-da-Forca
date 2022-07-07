/* Seletores e variaveis */



var tela = document.getElementById('forca');
var pincel = tela.getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 9;
var ContadorPalavraErrada = 0;

/* Escolher palavras aleatórias */
function escolherPalavraSecreta(){
	var palavra = palavras[Math.floor(Math.random()*palavras.length)];
	palavraSecreta = palavra;
	/*console.log(palavra);
	console.log(palavras);*/
	return palavra;
}

/* Desenhando traços com canvas */
function escreverTracinhos(){
	pincel.lineWidth = 6; 
	pincel.lineCap = "round";
	pincel.lineJoin = "roun";
	pincel.strokeStyle = "blue";
	pincel.beginPath();
	
	var eixo = 350/palavraSecreta.length;	
	for(var i = 0; i < palavraSecreta.length; i++){
		pincel.moveTo(325+(eixo*i),371); 
		pincel.lineTo(352+(eixo*i),371);		
	}
	pincel.stroke();
	pincel.closePath();
}

escreverTracinhos(escolherPalavraSecreta()); 

function escreverLetraCorreta(index){
	pincel.font = 'bold 52px Montserrat';
	pincel.lineWidth = 6;
	pincel.lineJoin = "roun";
	pincel.strokeStyle = "blue";
	
	var eixo = 	350/palavraSecreta.length;
	pincel.fillText(palavraSecreta[index],320+(eixo*index), 364); 
	pincel.stroke();	
	pincel.closePath();  /* */
}

function escreverLetraIncorreta(letra, errorsLeft){
	pincel.font = 'bold 40px Montserrat';
	pincel.lineWidth = 6;
	pincel.lineJoin = "roun";
	pincel.strokeStyle = "blue";
	pincel.fillText(letra, 347+(28*(6-errorsLeft)),413,28);
	pincel.closePath(); /* */
	ContadorPalavraErrada++;
	desenharCorpoTodo();
}		

function verificarLetraCorreta(key){
	if(letras.length < 1 || letras.indexOf(key) < 0){
		console.log(key);
		letras.push(key);
		return false;
	}
	else {
		letras.push(key.toUpperCase());
		return true;
	}
}

function adicionarLetraCorreta(i){
	palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter){
	if(palavraSecreta.indexOf(letter) <= 0){
		erros -= 1;
	}
}

/* Começãr o jogo*/
document.onkeydown = (e) => {
	var letra  = e.key.toUpperCase();	
	
	if(!verificarLetraCorreta(e.key)){
			if(palavraSecreta.includes(letra)){
					adicionarLetraCorreta(palavraSecreta.indexOf(letra));
						for( var i = 0; i < palavraSecreta.length; i++){
							if(palavraSecreta[i] === letra){
									escreverLetraCorreta(i);
							}
							/*alert("VOCÊ GANHOU!");*/
						}						
			}	 
			else {
				if(!verificarLetraCorreta(e.key))									
					return 
					adicionarLetraIncorreta(letra) 
					escreverLetraIncorreta(letra, erros)
			} 
	}		
	
	if(palavraSecreta.length == palavraCorreta.length){
		escreverVoGanhou();
	}	
};




























