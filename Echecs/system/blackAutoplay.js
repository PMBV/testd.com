function blackAutoplay(where) {
	possiblePlaysTable = possiblePlays(where)
	blackPossiblePlaysTable = []
	for(x=0;x<possiblePlaysTable.length;x++) {
		if(possiblePlaysTable[x][0] == "b") {
			blackPossiblePlaysTable[blackPossiblePlaysTable.length] = possiblePlaysTable[x].split("_")
		}
	}
	bestPlay = blackPossiblePlaysTable[0]
	for(x=0;x<blackPossiblePlaysTable.length;x++) {
		if(x>0) {
			if(bestPlay[3] != "null") {
				if(parseInt(blackPossiblePlaysTable[x][3][1])>parseInt(bestPlay[3][1])) {
					bestPlay = blackPossiblePlaysTable[x]
				}
			}
			else {
				if(parseInt(blackPossiblePlaysTable[x][3][1])>null) {
					bestPlay = blackPossiblePlaysTable[x]
				}
			}
		}
	}
	return bestPlay[0] + '_' + bestPlay[1] + '_' + bestPlay[2] + '_' + bestPlay[3]
}

function blackAutoplayConfig() {
	if(bAutoplay == false) {
		bAutoplay = true
		document.getElementById('auto').innerHTML = "Black autoplay (on)"
	}
	else {
		bAutoplay = false
		document.getElementById('auto').innerHTML = "Black autoplay (off)"
	}
}

function autoplayTest(where, color, profunder, value, basePlayAssociate = null, lastBP = []) {
	////////// profunder permet de définir la grandeur de l'arbre
	////////// value permet de suivre la valeur de la suite de coup tout au long des fonctions composants la suite
	////////// basePlayAssociate permet de, lorsque la suite est achevée, faire correspondre sa valeur au coup de base, celui
	////////// pourrait potentiellement être joué sur system
	if(tour == "b" && bAutoplay == true && profunder < profunderMax) {
		if(color == "b") {
			console.log(basePlayAssociate)

			possiblePlaysTable = possiblePlays(where)
			blackPossiblePlaysTable = []
			for(x=0;x<possiblePlaysTable.length;x++) {
				if(possiblePlaysTable[x][0] == "b") {
					blackPossiblePlaysTable[blackPossiblePlaysTable.length] = possiblePlaysTable[x]
				}
			}

			copyOfWhere = where.slice()
			for(x=0;x<blackPossiblePlaysTable.length;x++) {


				copyOfWhere[blackPossiblePlaysTable[x].split('_')[2]] = copyOfWhere[blackPossiblePlaysTable[x].split('_')[1]]
				copyOfWhere[blackPossiblePlaysTable[x].split('_')[1]] = "x"

				if(basePlayAssociate == null)  {
					basePlayAssociatee = "go"
					autoplayTest(copyOfWhere, "w", profunder+1, blackPossiblePlaysTable[x].split('_')[3].slice(1), basePlayAssociate = basePlayAssociatee)
				}
				else if(basePlayAssociate == "go")  {
					basePlayAssociatee = testResult.length
					testResult[testResult.length] = []
					autoplayTest(copyOfWhere, "w", profunder+1, blackPossiblePlaysTable[x].split('_')[3].slice(1), basePlayAssociate = basePlayAssociatee)
				}
				else {
					autoplayTest(copyOfWhere, "w", profunder+1, blackPossiblePlaysTable[x].split('_')[3].slice(1))
				}

				///////////////////pour l'instant, aucun arbre n'est crée, la fonction ne s'éxécute que profondeur max fois, et non pas sous forme d'arbre
				///////////////////car il ne faut pas l'éxécuter uniquement pour le meilleur coup, mais pour tous les coups possibles 
			}
		}
	
		if(color == "w") {
			possiblePlaysTable = possiblePlays(where)
			whitePossiblePlaysTable = []
			for(x=0;x<possiblePlaysTable.length;x++) {
				if(possiblePlaysTable[x][0] == "w") {
					whitePossiblePlaysTable[whitePossiblePlaysTable.length] = possiblePlaysTable[x]
				}
			}
			
			copyOfWhere = where.slice()
			for(x=0;x<whitePossiblePlaysTable.length;x++) {

				copyOfWhere[whitePossiblePlaysTable[x].split('_')[2]] = copyOfWhere[whitePossiblePlaysTable[x].split('_')[1]]
				copyOfWhere[whitePossiblePlaysTable[x].split('_')[1]] = "x"
	
				autoplayTest(copyOfWhere, "b", profunder+1, whitePossiblePlaysTable[x].split('_')[3].slice(1))

				///////////////////pour l'instant, aucun arbre n'est crée, la fonction ne s'éxécute que profondeur max fois, et non pas sous forme d'arbre
				///////////////////car il ne faut pas l'éxécuter uniquement pour le meilleur coup, mais pour tous les coups possibles 
			}
		}
	}

	if(tour == "b" && bAutoplay == true && profunder == profunderMax) {
		//testResult[basePlayAssociate][testResult[basePlayAssociate].length] = [bestPlay, value]


		///// selon le coup d'engagement de la suite, c'est à dire celui qui pourrait être joué lors du tour concerné dans system
		/////il faut classifier la valeur
		///// ainsi, selon la valeur max ou min de chaque coup apportée par certaines suites de coups, on pourra juger de la valeur profonde d'un simple coup
		/////sur system
	}
}