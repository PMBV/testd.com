function possiblePlays(where) {
	possiblePlaysTable = []
	for(h=0;h<64;h++) {
		pieceExlusion = false
		if(where[h] != "x") {
			if(where[h][1] == "r") {
				list = [-7, -8, -9, -1, 1, 7, 8, 9]
				for(y=0;y<8;y++) {
					if(parseInt(h)+list[y]>=0 && parseInt(h)+list[y]<=63) {
						if(rRules(h, parseInt(h)+list[y]) == true) {
							value = valueOfPlay(h, parseInt(h)+list[y], where)
							possiblePlaysTable[possiblePlaysTable.length] = (where[h] + "_" + h + "_" + parseInt(h+list[y]) + "_" + value)
						}
					}
				}
			}

			else if(where[h][1] == "c") {
				list = [-6, -10, -15, -17, 6, 10, 15, 17]
				for(y=0;y<8;y++) {
					if(parseInt(h)+list[y]>=0 && parseInt(h)+list[y]<=63) {
						if(cRules(h, parseInt(h)+list[y]) == true) {
							value = valueOfPlay(h, parseInt(h)+list[y], where)
							possiblePlaysTable[possiblePlaysTable.length] = (where[h] + "_"  + h + "_" + parseInt(h+list[y]) + "_" + value)
						}
					}
				}
			}
			
			else if(where[h][1] == "p") { ////// ne prends pas en compte les doubles mouvements
				list = [7, 8, 9, 16, -7, -8, -9, -16]
				for(y=0;y<8;y++) {
					if(parseInt(h)+list[y]>=0 && parseInt(h)+list[y]<=63) {
						if(pRules(h, parseInt(h+list[y])) == true) {
							value = valueOfPlay(h, parseInt(h)+list[y], where)
							possiblePlaysTable[possiblePlaysTable.length] = (where[h] + "_" + h + "_" + parseInt(h+list[y]) + "_" + value)
						}
					}
				}
			}
			else if(where[h][1] == "t") { 
				list = [parseInt(h/8)*8, parseInt(h/8)*8+1, parseInt(h/8)*8+2, parseInt(h/8)*8+3, parseInt(h/8)*8+4, parseInt(h/8)*8+5, parseInt(h/8)*8+6, parseInt(h/8)*8+7,
				parseInt(h%8), parseInt(h%8+8), parseInt(h%8+16), parseInt(h%8+24), parseInt(h%8+32), parseInt(h%8+40), parseInt(h%8+48), parseInt(h%8+56)]////maintenant, agrémenter la liste après pipi :-)
				for(y=0;y<16;y++) {
					if(h>=0 && list[y]<=63) {
						if(tRules(h, parseInt(list[y])) == true) {
							value = valueOfPlay(h, list[y], where)
							possiblePlaysTable[possiblePlaysTable.length] = (where[h] + "_"  + h + "_" + parseInt(list[y]) + "_" + value)
						}
					}
				}
			}
			else if(where[h][1] == "f") { 
				list = [parseInt(h%9+0*9), parseInt(h%9+1*9), parseInt(h%9+2*9), parseInt(h%9+3*9), parseInt(h%9+4*9), parseInt(h%9+5*9), parseInt(h%9+6*9), parseInt(h%9+7*9),
				parseInt(h%7+0*7), parseInt(h%7+1*7), parseInt(h%7+2*7), parseInt(h%7+3*7), parseInt(h%7+4*7), parseInt(h%7+5*7), parseInt(h%7+6*7), parseInt(h%7+7*7), parseInt(h%7+7*8)]////maintenant, agrémenter la liste après pipi :-)
				for(y=0;y<17;y++) {
					if(h+list[y]>=0 && list[y]<=63) {
						if(fRules(h, list[y]) == true) {
							value = valueOfPlay(h, list[y], where)
							possiblePlaysTable[possiblePlaysTable.length] = (where[h] + "_"  + h + "_" + list[y] + "_" + value)
						}
					}
				}
			}
			else if(where[h][1] == "d") { 
				list = [parseInt(h%9+0*9), parseInt(h%9+1*9), parseInt(h%9+2*9), parseInt(h%9+3*9), parseInt(h%9+4*9), parseInt(h%9+5*9), parseInt(h%9+6*9), parseInt(h%9+7*9),
				parseInt(h%7+0*7), parseInt(h%7+1*7), parseInt(h%7+2*7), parseInt(h%7+3*7), parseInt(h%7+4*7), parseInt(h%7+5*7), parseInt(h%7+6*7), parseInt(h%7+7*7),
				parseInt(h/8)*8, parseInt(h/8)*8+1, parseInt(h/8)*8+2, parseInt(h/8)*8+3, parseInt(h/8)*8+4, parseInt(h/8)*8+5, parseInt(h/8)*8+6, parseInt(h/8)*8+7,
				parseInt(h%8), parseInt(h%8+8), parseInt(h%8+16), parseInt(h%8+24), parseInt(h%8+32), parseInt(h%8+40), parseInt(h%8+48), parseInt(h%8+56), parseInt(h%7+7*8)]////maintenant, agrémenter la liste après pipi :-)
				for(y=0;y<33;y++) {
					if(h+list[y]>=0 && list[y]<=63) {
						if(dRules(h, list[y]) == true) {
							value = valueOfPlay(h, list[y], where)
							possiblePlaysTable[possiblePlaysTable.length] = (where[h] + "_"  + h + "_" + list[y] + "_" + value)
						}
					}
				}
			}
		}
	}
	return possiblePlaysTable

}