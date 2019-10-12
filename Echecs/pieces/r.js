function rRules(whereIs, whereGo) {

	if(system[whereIs][0] == "w") {
		if(system[whereGo][0]=="w") {
			return false
		}
	}
	else {
		if(system[whereGo][0]=="b") {
			return false
		}
	}

	if(whereIs%8!=7 && whereIs%8!=0 && whereIs/8!=0 && whereIs/8!=7) { // si le roi est sur une case du milieu, pas sur un rebord
		if(whereGo!=whereIs-1 && whereGo!=whereIs-7 && whereGo!=whereIs-8 && whereGo!=whereIs-9 && whereGo!=parseInt(whereIs)+1 && whereGo!=parseInt(whereIs)+7 && whereGo!=parseInt(whereIs)+8 && whereGo!=parseInt(whereIs)+9) {
			return false
		}
		else {
			return true
		}
	}

	if(whereIs%8==7) { // si le roi est sur le rebord droit
		if(whereGo!=whereIs-1 && whereGo!=whereIs-8 && whereGo!=whereIs-9&& whereGo!=parseInt(whereIs)+7 && whereGo!=parseInt(whereIs)+8) {
			return false
		}
		else {
			return true
		}
	}

	if(whereIs%8==0) { // si le roi est sur le rebord gauche
		if(whereGo!=parseInt(whereIs)+1 && whereGo!=whereIs-8 && whereGo!=parseInt(whereIs)+9&& whereGo!=parseInt(whereIs)-7 && whereGo!=parseInt(whereIs)+8) {
			return false
		}
		else {
			return true
		}
	}
// inutile de faire la même chose pour les rebors hauts et bas, car leurs potentielles déviations sont inaccessible pour le joueur, à cause de la restriction des nombres (de 0 à 63, ni plus ni moins)
}