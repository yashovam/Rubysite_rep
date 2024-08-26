
/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

//  0 'id',  1 'iname' ,2 'Material' , 3 'Carat' , 4 'description', 5 'Color' , 6 'Clarity' , 7 'price' , 8 'function()' , 9 ['images'], 10 'Silk', 11 'cut', 12 'lengthy description'
const rubies = [
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[2, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[2, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[2, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[2, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
	[1, 'crimson tear', 'ruby', 2.1, 'description in few lines of text like this', '#32f00', 2, 999, '/gems/1.html',['images/1/1.jpg','images/1/ 2.jpg','images/1/ 3.jpg','images/1/ 4.jpg'],3, 'cut', 'lengthy description here insert alot of text here if needed like maybe multiline comments.' ],
];

var filters = [];

/* >-----------------------------------<><><><><> Functions <><><><><>-----------------------------------< */

/*
			<input type="radio" name="slide_switch" id="id${nu}" />	
				
				<label for="id${nu}">
				<img src="${imm}" />
				</label>
<img src="${imm}" id='slimg' class='sl_img' />

<div class="mySlides fade">

				<label for="id${nu}">
				<img src="${imm}" class='sl_l' />
				</label>
				
				id='slimg' class='slimg'





				<div class='mySlides' >

				<input type="radio" name="slide_switch" id="id${nu}" />	
				
				<span class="demo" onclick="currentSlide(${nu})"></span>

				<img src="${imm}"  style="width:90%" />

				<div class="text"> ]|${nu}|[ </div>
				</div>

				</div>


*/


function im_list(liist) {
	
	let imgal = '';
	
		liist.forEach((imm, nu) => {

			imgal += (`

				<div >
				<img src="${imm}" alt='${nu}' style="width:90%" />

				</div>
				
				`);


		});
		return imgal;
	}

function sort_f(items,filter) {

	// if no filters are specified, return the original array
	if (filter === undefined || filter === null ||filter.length < 1) {
		return (items);
	} 
	let sortedArray = [...items];
	
	let filt = [...filter];

	// Apply the combination of filters to sort the rubies array
	// Favor the first chosen filter
	filt.forEach(element => {
			if ('pri' === element) {
				sortedArray.sort((a, b) => a[7] - b[7]);

			} else if ('car' === element) {
				sortedArray.sort((a, b) => a[3] - b[3]);

			} else if ('cut' === element) {
				sortedArray.sort((a, b) => a[11].localeCompare(b[11]));

			} else if ('cla' === element) {
				sortedArray.sort((a, b) => a[6] - b[6]);

			} else if ('col' === element) {
				sortedArray.sort((a, b) => a[5].localeCompare(b[5]));

			} else if ('sil' === element) {
				sortedArray.sort((a, b) => a[10] - b[10]);

			} else if ('ruby' === element) {
				sortedArray.sort((a, b) => a[2].localeCompare(b[2]));

			} else if ('eme' === element) {
				sortedArray.sort((a, b) => a[2].localeCompare(b[2]));

			} else if ('cor' === element) {
				sortedArray.sort((a, b) => a[2].localeCompare(b[2]));

			}
	});
	return sortedArray;
}
/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */
/* >------------------------------------<table constructor>------------------------------------< */
/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */
function gen() {
	var inventory = sort_f(rubies,filters);
	var redfir = document.getElementById('redfir');
	var htm = "<table class='shop_table'>";
	

	var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	//var tableWidthPercent = screenWidth / 100;

	var table_w = Math.floor(screenWidth / 200);

	//<!-- ${row[0,1,2]}  -->

	inventory.forEach((row, i) => {
		if (i === 0) {
			htm += "<tr class='product-row'>";

		} else if (i % table_w === 0) {
			htm += "</tr>";
			htm += "<tr class='product-row'>";
	
		} 

		htm += `<td class='prod-case' >
		<div class="product-card">
		<div class="product-image">
		<img src="${row[9][0]}" class="product-thumb" alt="" />
		<div onclick="viewGem(${i})" href="#popup1" class="card-btn"> View ${row[2]}</div>
		</div>
		<div class="product-info">
		<h2 class="product-brand">${row[1]}</h2>
		<p class="product-short-description"> ${row[3]} , ${row[6]}, ${row[11]}</p>
		<span class="price">$ ${row[7]}</span>
		</div>
		</div>
		</td>`;

		if (i === inventory.length) {
			htm += "</tr>";

		}
	});
	htm += "</table>";
	redfir.innerHTML = htm;
}

/* >-----------------------------------<><><><><> <><><><><>-----------------------------------< */
/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

document.addEventListener("DOMContentLoaded", function() {
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let aa = false;
document.getElementById("submit").addEventListener("click", () => {
	
	if (aa === false) {
		aa = true;
		document.getElementById("submit").style.color = '#ff0000';
	} else {
		aa = false;
		document.getElementById("submit").style.color = '#00ff0d';
	}
	
	filters += 3;
	gen();
}); 

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */
let bb = false;

var fpri = document.getElementById("f_pri");

document.getElementById("f_pri").addEventListener("click", () => {
	
	if (bb === false) {
		bb = true;
		fpri.style.color = '#880000';
		fpri.style.color = '#3a3a3a';
	} else {
		bb = false;
		document.getElementById("f_pri").style.color = '#00ff0d';
	}
	
	filters += 'pri';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */


let cc = false;
document.getElementById("reset").addEventListener("click", () => {
	
	if (cc === false) {
		cc = true;
		document.getElementById("reset").style.color = '#ff0000';
	} else {
		cc = false;
		document.getElementById("reset").style.color = '#00ff0d';
	}
	
	filters = [];
	
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let dd = false;
document.getElementById("f_car").addEventListener("click", () => {
	
	if (dd === false) {
		dd = true;
		document.getElementById("f_car").style.color = '#ff0000';
	} else {
		dd = false;
		document.getElementById("f_car").style.color = '#00ff0d';
	}
	
	filters += 'car';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let eee = false;
document.getElementById("f_cut").addEventListener("click", () => {
	
	if (eee === false) {
		eee = true;
		document.getElementById("f_cut").style.color = '#ff0000';
	} else {
		eee = false;
		document.getElementById("f_cut").style.color = '#00ff0d';
	}
	
	filters += 'cut';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let fff = false;
document.getElementById("f_cla").addEventListener("click", () => {
	
	if (fff === false) {
		fff = true;
		document.getElementById("f_cla").style.color = '#ff0000';
	} else {
		fff = false;
		document.getElementById("f_cla").style.color = '#00ff0d';
	}
	
	filters += 'cla';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */
let ggg = false;
document.getElementById("f_col").addEventListener("click", () => {
	
	if (ggg === false) {
		ggg = true;
		document.getElementById("f_col").style.color = '#ff0000';
	} else {
		ggg = false;
		document.getElementById("f_col").style.color = '#00ff0d';
	}
	
	filters += 'col';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let hhh = false;
document.getElementById("f_sil").addEventListener("click", () => {
	
	if (hhh === false) {
		hhh = true;
		document.getElementById("f_sil").style.color = '#ff0000';
	} else {
		hhh = false;
		document.getElementById("f_sil").style.color = '#00ff0d';
	}
	
	filters += 'sil';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let iii = false;
document.getElementById("f_eme").addEventListener("click", () => {
	
	if (iii === false) {
		iii = true;
		document.getElementById("f_eme").style.color = '#ff0000';
	} else {
		iii = false;
		document.getElementById("f_eme").style.color = '#00ff0d';
	}
	
	filters += 'eme';
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */
let jjj = false;
document.getElementById("f_cor").addEventListener("click", () => {
	
	if (jjj === false) {
		jjj = true;
		document.getElementById("f_cor").style.color = '#ff0000';
	} else {
		jjj = false;
		document.getElementById("f_cor").style.color = '#00ff0d';
	}
	
	filters += 'cor';
	gen();
});



/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

let kik = false;
document.getElementById("f_search").addEventListener("click", () => {
	var srch = document.getElementById("f_search").value;
	// Use the value of searchInput for further processing
	if (kik === false) {
		kik = true;
		document.getElementById("f_search").style.color = '#ff0000';
	} else {
		kik = false;
		document.getElementById("f_search").style.color = '#00ff0d';
	}
	
	filters += srch;
	gen();
});

/* >-----------------------------------<><><><><>o<><><><><>-----------------------------------< */

var hlp = false;
const helpElement = document.getElementById("help");

function toggle_h() {
	
	if (hlp === false) {
		helpElement.style.display = "none";
		hlp = true;
		
	} else {
		helpElement.style.display = "block";
		hlp = false;
		
	}
}

document.getElementById(".toggle_help").addEventListener("click", toggle_h);


/* >-----------------------------------<><><><><> GEM POPUP <><><><><>-----------------------------------< */
function viewGem(num) {
	
	var gemv = document.getElementById("view_gem");

	var rby = rubies[num];
	
	let slidess = `<div class="container" style='overflow-x:scroll white-space:nowrap padding:10px max-height:30%' >${im_list(rby[9])}</div>`;
	
	var hmhm = `
		<br>
		<div class='beh'>
			<div class="popup">
				
				<h1 class="product-brand">${rby[1]}</h1>

				<br>
				
				${slidess}

				<br>

				<button class="snipcart-add-item"
					data-item-url="store.html"
					data-item-id="${rby[0]}"
					data-item-price="${rby[7]}"
					data-item-description="${rby[3]}"
					data-item-image="images/card1.jpg"
					data-item-name="${rby[1]}"
					onclick='x_gem()' >
					ADD TO CART
				</button>

				<br>

				<p class="product-short-description">${rby[3]} , ${rby[6]}, ${rby[11]}</p>
				<br>
				<span class="price">$ ${rby[7]}</span>


				<div class="close">
				<a
					href="javascript:void(0)"
					id="ex"
					onclick="x_gem()"
					>&times;</a>

			</div>
		</div>
		<br>`;
				
	gemv.innerHTML = hmhm;
	
}


/* >-----------------------------------<><><><><> FILTER OP <><><><><>-----------------------------------< */

function updatePrice(value) {
	document.getElementById("f_pri_m").textContent = value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

/* >-----------------------------------<><><><><> <><><><><>-----------------------------------< */



function x_gem() {
	document.getElementById('view_gem').innerHTML = '';
}

/* >-----------------------------------<><><><><> 
 * 
 * 

	function v_gem() {

		document.getElementById('view_gem').innerHTML = '' ;
	}
 * 
 * 
 * <><><><><>-----------------------------------< */



