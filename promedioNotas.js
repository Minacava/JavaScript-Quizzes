

function Resultados (notas,examen,trabajo){
	var Total = notas+examen+trabajo;
    return Total / 3;
}

alert(Resultados(90, 5, 5));