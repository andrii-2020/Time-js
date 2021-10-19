

const selectMoons = document.getElementById("select");
const selectDay = document.getElementById("selectData");
const selectYear = document.getElementById("selectYear");
const timeControl = document.querySelector('input[type="time"]');
let m = ['January',	'February','March','April','May','June','July',
	'August','September','October','November','December'];

function names() {
	for (let i = 1; i < 32; i++) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		selectDay.appendChild(opt);
	}
	setTimeout(() => {
		for (let it of m ) {
			let opti = document.createElement('option');
			opti.value = it;
			opti.innerHTML = it;
			selectMoons.appendChild(opti);
		}
	}, 50);
}
names();



document.getElementById('d').innerHTML = 0;
document.getElementById('h').innerHTML = 0;
document.getElementById('m').innerHTML = 0;
document.getElementById('s').innerHTML = 0;

document.getElementById('btn').addEventListener('click', () => {
  	interval = setInterval(hours,1000);
});


function hours(){
	const selectValueM = selectMoons.value;
	const selectVDATAD = selectDay.value;
	const time = timeControl.value;
	console.log(time)
	let date = new Date(`${selectValueM} ${selectVDATAD} ${selectYear.value} ${time}:00`)
	let now = new Date();
	g = date - now;
	let days = Math.floor(g / 1000 / 60 / 60 / 24);
	let hour = Math.floor(g / 1000 / 60 / 60) % 24;
	let min = Math.floor(g / 1000 / 60) % 60;
	let sec = Math.floor(g / 1000 ) % 60;
	document.getElementById('d').innerHTML = days;
	document.getElementById('h').innerHTML = hour;
	document.getElementById('m').innerHTML = min;
	document.getElementById('s').innerHTML = sec;
	if(sec <= sec) {
		let second = document.getElementById('s')
		second.style.background = `-webkit-linear-gradient(rgba(${--sec*7}, ${--sec*7}, 255, 1), rgba(255, ${--sec}, ${--sec}, 1))`;
		second.style.webkitBackgroundClip = 'text';
		second.style.webkitTextFillColor = 'transparent';
	}
	if(g < 0){
		document.getElementById('myAudio').play();
		document.getElementById('d').innerHTML = 0;
		document.getElementById('h').innerHTML = 0;
		document.getElementById('m').innerHTML = 0;
		document.getElementById('s').innerHTML = 0;
		clearInterval(interval);
	}
}

document.getElementById('stop').addEventListener('click', () => {
	clearInterval(interval);
});






