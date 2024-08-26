	
	// 0 'id',  1 'iname' ,2 'Material' , 3 'Carat' , 4 'Silk' , 5 'Color' , 6 'Clarity' , 7 'price' , 8 '<a>link' , 9 ['images']
	f_material(rubies, mat) {
		// Sort the 'rubies' array based on the first element of each subarray + a = first list of lists, b = subarray list of lists
		const sorted = rubies.sort((a, b) => a[0] - b[2]);
		return sorted;
	}
	//
	sort_pr(rubies, pr=1) {
		const sorted = rubies.sort((a, b) => a[0] - b[7]);
		return sorted;
	}	
	//
	sort_carat(rubies) {
		const sorted = rubies.sort((a, b) => a[0] - b[3]);
		return sorted;
	}
	//
	sort_col(rubies, col=0) { // 0 = red, 1 = blue,  3 = purple
		const sorted = rubies.sort((a, b) => a[0] - b[5]);
		return sorted;
	}
	//
	sort_clar(rubies) {  // amount of imperfections
		const sorted = rubies.sort((a, b) => a[0] - b[6]);
		return sorted;
	}
	//
	sort_silk(rubies, silk) {
		const sorted = rubies.sort((a, b) => a[0] - b[4]);
		return sorted;
	}


	
	rubies.forEach((row) => {
			
	})





