function pRules(whereIs, whereGo) {
//////ATENTION PAS ENCORE DE SYSTEME ASSURANT LE CHANGEMENT DU PION EN DAME LORS DE L4INVERSION DU SENS DU PLATEAU!!!!!! Et AUSSI POUR LE DOUBLE 
////// MOUVEMENT DU PION!!!!!!

	color = system[whereIs][0]	
	if(color == "w") {
		if(whereIs-16 == whereGo && parseInt(whereIs/8) == 6 && system[whereGo] == "x" && system[parseInt(whereGo)+8] == "x") {
			system[whereIs] = "wp"
			return true
		}

		if(whereIs-8 == whereGo && system[whereGo] == "x" && system[whereGo][0] != "w") {
			system[whereIs] = "wp"
			queenTransform(parseInt(whereGo/8), "w", whereIs)
			return true
		}

		if(whereIs-7 == whereGo && system[whereGo] != "x" && system[whereGo][0] != "w") {
			system[whereIs] = "wp"
			queenTransform(parseInt(whereGo/8), "w", whereIs)
			return true
		}

		if(whereIs-9 == whereGo && system[whereGo] != "x" && system[whereGo][0] != "w") {
			system[whereIs] = "wp"
			queenTransform(parseInt(whereGo/8), "w", whereIs)
			return true
		}
	}

	else {
		if(parseInt(whereIs)+16 == whereGo && parseInt(whereIs/8) == 1 && system[whereGo] == "x" && system[parseInt(whereGo)-8] == "x") {
			system[whereIs] = "bp"
			return true
		}
		if(whereGo-8 == whereIs && system[whereGo] == "x" && system[whereGo][0] != "b") {
			system[whereIs] = "bp"
			queenTransform(parseInt(whereGo/8), "b", whereIs)
			return true
		}

		if(whereGo-7 == whereIs && system[whereGo] != "x" && system[whereGo][0] != "b") {
			system[whereIs] = "bp"
			queenTransform(parseInt(whereGo/8), "b", whereIs)
			return true
		}

		if(whereGo-9 == whereIs && system[whereGo] != "x" && system[whereGo][0] != "b") {
			system[whereIs] = "bp"
			queenTransform(parseInt(whereGo/8), "b", whereIs)
			return true
		}
	}


}
// les deux propriétés spéciales du pion : le double mouvement pour le premier coup, et sa transformation en dame lorsqu'il arrive à l'extrémité du camp ennemi

function queenTransform(lineWhereGo, color, whereIs) {
	if(color=="w") {
		if(lineWhereGo==0) {
			system[whereIs] = "wd"
		}
	}
	else {
		if(lineWhereGo==7) {
			system[whereIs] = "bd"
		}
	}
}
