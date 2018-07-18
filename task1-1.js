function getGrn() {
	let grn = document.getElementById('usd').value;
	let usd = document.getElementById('grn').value;
	document.getElementById('grn').value = grn * 26;
}

function getUsd() {
	let grn = document.getElementById('usd').value;
	let usd = document.getElementById('grn').value;
	document.getElementById('usd').value = usd / 26;
}