for (var a = 1; a <= 100; a++) {
	var conta = 0;
	for (var m=1; m<=a; m++) {
	  if (a%m==0) {
		conta++
	  }
	}
	if (conta==2) {
	  console.log(a + ' - Número primo');
	}
	if (a% 3 === 0 && a% 5 === 0) {
	  console.log(a + ' - Itelios, part of Capgemini - Multiplo de 3 e 5');
	} else if
	(a% 3 === 0) {
	   console.log(a + ' - Itelios - Multiplo de 3');
	} else if
	  (a %5 === 0) {
		console.log(a + ' - Capgemini - Multiplo de 5');
	} else {
	  console.log(a);
	}
  }