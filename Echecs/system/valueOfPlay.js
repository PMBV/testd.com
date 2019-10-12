function valueOfPlay(whereIs, whereGo, where) {
	where = system.slice()
	blackTotalValue = 0
	whiteTotalValue = 0
	for(x=0;x<64;x++) {
		if(where[x] != "x") {
			if(where[x][0] == "w") {
				if(where[x][1] == "f" || where[x][1] == "c") {
					whiteTotalValue+=3
				}
				if(where[x][1] == "t") {
					whiteTotalValue+=5
				}
				if(where[x][1] == "d") {
					whiteTotalValue+=9
				}
				if(where[x][1] == "p") {
					whiteTotalValue+=1
				}
				if(where[x][1] == "r") {
					whiteTotalValue+=100
				}
			}
			else {
				if(where[x][1] == "f" || where[x][1] == "c") {
					blackTotalValue+=3
				}
				if(where[x][1] == "t") {
					blackTotalValue+=5
				}
				if(where[x][1] == "d") {
					blackTotalValue+=9
				}
				if(where[x][1] == "p") {
					blackTotalValue+=1
				}
				if(where[x][1] == "r") {
					blackTotalValue+=100
				}
			}
		}
	}

	///simuleMove
	where[whereGo] = where[whereIs]
	where[whereIs] = "x"

	blackTotalValueNew = 0
	whiteTotalValueNew = 0
	for(x=0;x<64;x++) {
		if(where[x] != "x") {
			if(where[x][0] == "w") {
				if(where[x][1] == "f" || where[x][1] == "c") {
					whiteTotalValueNew+=3
				}
				if(where[x][1] == "t") {
					whiteTotalValueNew+=5
				}
				if(where[x][1] == "d") {
					whiteTotalValueNew+=9
				}
				if(where[x][1] == "p") {
					whiteTotalValueNew+=1
				}
				if(where[x][1] == "r") {
					whiteTotalValueNew+=100
				}
			}
			else {
				if(where[x][1] == "f" || where[x][1] == "c") {
					blackTotalValueNew+=3
				}
				if(where[x][1] == "t") {
					blackTotalValueNew+=5
				}
				if(where[x][1] == "d") {
					blackTotalValueNew+=9
				}
				if(where[x][1] == "p") {
					blackTotalValueNew+=1
				}
				if(where[x][1] == "r") {
					blackTotalValueNew+=100
				}
			}
		}
	}

	diffB = blackTotalValue-blackTotalValueNew
	diffW = whiteTotalValue-whiteTotalValueNew

	if(diffB>diffW) {
		return "w" + diffB // les blancs sont favorisés sur ce coup avec un gain de x valeur
	}
	else if(diffW>diffB) {
		return "b" + diffW
	}

	else {
		return "a" + null
	}
}