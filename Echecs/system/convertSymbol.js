function convertSymbol(symbol) {
	if(symbol.length == 2) {
		list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		a = 0
		for(x=0;x<8;x++) {
			if(symbol[0] == list[x]) {
				a=x
				break
			}
			if(x==7) {
				return false
			}
		}
		return symbol[1]*8+a
	}
}