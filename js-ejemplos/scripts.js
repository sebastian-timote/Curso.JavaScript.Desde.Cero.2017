var mynombre = ["alexis","miguel","angel","patricia","maria","enela","simon","marta","lucia"];
do {
	

	var letra = prompt("Introduce tu letra de nombre sale con cero");
	//console.log(mynombre[0].indexOf('a')==0);
		
	for (let index = 0; index < mynombre.length; index++) {
		let element = mynombre[index].indexOf(letra)==0;
		if (element==true) {
		console.log(mynombre[index]);

		}
			
	}
} while (letra!=0);	


