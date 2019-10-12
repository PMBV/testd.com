///une combinaison entre les propriétés du fou et de la tour, très simple
function dRules(whereIs, whereGo) {
	if(fRules(whereIs, whereGo) == true) {
		return true
	}

	else if(tRules(whereIs, whereGo) == true) {
		return true
	}

	else {
		return false
	}
}