function whiteAutoplay(where) {
	possiblePlaysTable = possiblePlays(where)
	blackPossiblePlaysTable = []
	for(x=0;x<possiblePlaysTable.length;x++) {
		if(possiblePlaysTable[x][0] == "w") {
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
				if(parseInt(blackPossiblePlaysTable[x][3][1])>0) {
					bestPlay = blackPossiblePlaysTable[x]
				}
			}
		}
	}
	return bestPlay[0] + '_' + bestPlay[1] + '_' + bestPlay[2] + '_' + bestPlay[3]
}
