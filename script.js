let preloader;

function preLoad() {
	preloader = setTimeout(showPage, 1500);
}

function showPage() {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('container').style.display = 'block';
}
