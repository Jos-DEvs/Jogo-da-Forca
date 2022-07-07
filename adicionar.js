
var palavra = document.querySelector(".palavra");

var salvar = document.querySelector(".jogar");

salvar.addEventListener("click", function(event){
		event.preventDefault();	
		
		if((palavra.value.length) <= 8){
			palavras.push(palavra.value.toUpperCase());
			alert("Palavra salvada: "+palavra.value);
			document.location.replace("jogar.html");
		}else{
			alert("Você só pode salvar uma palavra de 8 letras no máximo");
		}		
});