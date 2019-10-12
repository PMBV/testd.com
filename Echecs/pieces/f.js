function fRules(whereIs, whereGo) {
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

		//décomposition de la fonction en 4 parties, comme les 4 direction que peut prendre le fou
	if(whereIs/8>whereGo/8) { //si le fou se dirige vers le haut
		if(whereIs%8>whereGo%8) { //si le fou se dirige vers la gauche
			for(x=0;x<8;x++) {
				if(whereIs-(x+1)*9==whereGo) {
					return true
				}
				else if(system[whereIs-(x+1)*9]!="x") {
					return false
				}
			}

		}
		else { // se dirige vers la droite
			for(x=0;x<8;x++) {
				if(whereIs-(x+1)*7==whereGo) {
					return true
				}
				else if(system[whereIs-(x+1)*7]!="x") {
					return false
				}
			}
		}
	}
	else { // si le fou se dirige vers le bas
		if(whereIs%8>whereGo%8) { //vers la gauche
			for(x=0;x<8;x++) {
				if(parseInt(whereIs)+(x+1)*7==whereGo) {
					return true
				}
				else if(system[parseInt(whereIs)+(x+1)*7]!="x") {
					return false
				}
			}
		}
		else { //vers la droite
			for(x=0;x<8;x++) {
				if(parseInt(whereIs)+(x+1)*9==whereGo) {
					return true
				}
				else if(system[parseInt(whereIs)+(x+1)*9]!="x") {
					return false
				}
			}
		}
	}
}