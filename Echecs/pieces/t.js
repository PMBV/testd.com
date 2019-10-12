function tRules(whereIs, whereGo) {
	if(whereIs == whereGo) {
		return false
	}

	if(system[whereIs][0] == "w") {

		if(whereGo%8 == whereIs%8) {
			listColumn = []
			caseToPass = []
			diff = (parseInt(whereIs/8)-parseInt(whereGo/8))

			for(x=0;x<8;x++) { 
				listColumn[listColumn.length] = (x*8)+(whereGo%8)
			}
			
			for(x=0;x<Math.abs(diff);x++) {
				
				if(diff<=0) { //if movement go to low
					caseToPass[caseToPass.length] = listColumn[parseInt(parseInt(whereIs)/8+x)+1]
				}

				else { //if movement go to top
					caseToPass[caseToPass.length] = listColumn[parseInt(parseInt(whereIs)/8-x)-1]
				}
			}

			statut = true

			for(x=0;x<caseToPass.length;x++) {
				
				if(system[caseToPass[x]]=="x") {
					statut = true
				}

				else if(system[caseToPass[x]][0]=="b" && x==caseToPass.length-1) {
					statut = true
				}
				
				else {
					statut = false
					break
				}

			}

			if(statut==true) {
				return true
			}
			else {
				return false
			}
		}
/////////////////////////////////lateral white move
		if(parseInt(whereGo/8) == parseInt(whereIs/8)) {
			listLine = []
			caseToPass = []
			diff = (parseInt(whereIs%8)-parseInt(whereGo%8))

			for(x=0;x<8;x++) { 
				listLine[listLine.length] = parseInt(whereIs/8)*8+x
			}
			
			for(x=0;x<Math.abs(diff);x++) {
				
				if(diff<=0) { //if movement rigth
					caseToPass[caseToPass.length] = listLine[parseInt(whereIs%8+x)+1]

				}

				else { //if movement go to left
					caseToPass[caseToPass.length] = listLine[parseInt(whereIs%8-x)-1]
				}

			}


			statut = true

			for(x=0;x<caseToPass.length;x++) {
				
				if(system[caseToPass[x]]=="x") {
					statut = true
				}

				else if(system[caseToPass[x]][0]=="b" && x==caseToPass.length-1) {
					statut = true
				}
				
				else {
					statut = false
					break
				}

			}

			if(statut==true) {
				return true
			}
			else {
				return false
			}
		}
	}
/////////////////////////////black move
	if(system[whereIs][0] != "w") {

		if(whereGo%8 == whereIs%8) {
			listColumn = []
			caseToPass = []
			diff = (parseInt(whereIs/8)-parseInt(whereGo/8))

			for(x=0;x<8;x++) { 
				listColumn[listColumn.length] = (x*8)+(whereGo%8)
			}
			
			for(x=0;x<Math.abs(diff);x++) {
				
				if(diff<=0) { //if movement go to low
					caseToPass[caseToPass.length] = listColumn[parseInt(parseInt(whereIs)/8+x)+1]
				}

				else { //if movement go to top
					caseToPass[caseToPass.length] = listColumn[parseInt(parseInt(whereIs)/8-x)-1]
				}
			}

			statut = true

			for(x=0;x<caseToPass.length;x++) {
				
				if(system[caseToPass[x]]=="x") {
					statut = true
				}

				else if(system[caseToPass[x]][0]=="w" && x==caseToPass.length-1) {
					statut = true
				}
				else {
					statut = false
					break
				}


			}

			if(statut==true) {
				return true
			}

			else {
				return false
			}
		}
/////////////////////////////////////lateral black move
		if(parseInt(whereGo/8) == parseInt(whereIs/8)) {
			listLine = []
			caseToPass = []
			diff = (parseInt(whereIs%8)-parseInt(whereGo%8))

			for(x=0;x<8;x++) { 
				listLine[listLine.length] = parseInt(whereIs/8)*8+x
			}
			
			for(x=0;x<Math.abs(diff);x++) {
				
				if(diff<=0) { //if movement rigth
					caseToPass[caseToPass.length] = listLine[parseInt(whereIs%8+x)+1]

				}

				else { //if movement go to left
					caseToPass[caseToPass.length] = listLine[parseInt(whereIs%8-x)-1]
				}

			}


			statut = true

			for(x=0;x<caseToPass.length;x++) {
				
				if(system[caseToPass[x]]=="x") {
					statut = true
				}

				else if(system[caseToPass[x]][0]=="w" && x==caseToPass.length-1) {
					statut = true
				}
				
				else {
					statut = false
					break
				}

			}

			if(statut==true) {
				return true
			}

			else {
				return false
			}
		}
	}
}

