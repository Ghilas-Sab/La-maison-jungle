function Verif(type, nbr){
	if( nbr === 1 && type === 'water') {
		alert('Cette plante requiert peu d eau et  composant CareScale de type water')
	}else{
		if( nbr === 1 && type === 'light') alert('Cette plante requiert peu de lumiére et  composant CareScale de type light')
	};
	if( nbr === 2 && type === 'water') {
		alert('Cette plante requiert modérement d eau et  composant CareScale de type water')
	}else{
		if(nbr === 2 && type === 'light') alert('Cette plante requiert modérement de lumiére et  composant CareScale de type light')
	};
	if( nbr === 3 && type === 'water') {
		alert('Cette plante requiert beaucoup d eau et  composant CareScale de type water')
	}else{
		if(nbr === 3 && type === 'light') alert('Cette plante requiert beaucoup de lumiére et  composant CareScale de type light')
	};
}

export default Verif