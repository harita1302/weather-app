const api={
	key: "d00bcd11c292ca33cc8d2c565eb6ad22",
	base: "https://api.openweathermap.org/data/2.5/weather"

}

//event listener function The addEventListener() method attaches an event handler to the specified element. this function is used for getting the searched element in api
const searchbox=document.getElementById('inputbox');

searchbox.addEventListener('keypress',(event) =>{
	if(event.keyCode==13) {
		console.log(searchbox.value);
		getweatherReport(searchbox.value);
	}
	

});
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// get weather reprt fetching from api
function getweatherReport(city){
	fetch(`${api.base}?q=${city}&appid=${api.key}&units=metric`)
	.then(weather => {
		return weather.json();
	}).then(displayweatherReport);
}

// display weather report
function displayweatherReport(weather){
	console.log(weather);

	let city= document.getElementById('city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let temp=document.getElementById('temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

	let weathertype=document.getElementById('weathertype');
	weathertype.innerText= `${weather.weather[0].main}`;

	let date = document.getElementById('date');
	let todayDate = new Date();
	date.innerText=dateManage(todayDate);

	if(weathertype.textContent =='Clear'){
		document.body.style.backgroundImage= "url('sunny.jpg')";
		document.getElementById("city").style.color="#C35817";
		document.getElementById("date").style.color="#C35817";
		document.getElementById("temp").style.color="#C35817";
		document.getElementById("weathertype").style.color="#C35817";
	}
	else if(weathertype.textContent =='Haze'){
		document.body.style.backgroundImage= "url('haze.jpg')";
		document.getElementById("city").style.color="#3B3131";
		document.getElementById("date").style.color="#3B3131";
		document.getElementById("temp").style.color="#3B3131";
		document.getElementById("weathertype").style.color="#3B3131";
	}
	else if(weathertype.textContent =='Clouds'){
		document.body.style.backgroundImage= "url('cloudy.jpg')";
		document.getElementById("city").style.color="white";
		document.getElementById("date").style.color="white";
		document.getElementById("temp").style.color="white";
		document.getElementById("weathertype").style.color="white";
	}
	else if(weathertype.textContent =='Rain'){
		document.body.style.backgroundImage= "url('rain.jpg')";
		document.getElementById("city").style.color="#FDEEF4";
		document.getElementById("date").style.color="#FDEEF4";
		document.getElementById("temp").style.color="#FDEEF4";
		document.getElementById("weathertype").style.color="#FDEEF4";
	}
	else if(weathertype.textContent =='Snow'){
		document.body.style.backgroundImage= "url('snow.jpg')";
		document.getElementById("city").style.color="#6D7B8D";
		document.getElementById("date").style.color="#6D7B8D";
		document.getElementById("temp").style.color="#6D7B8D";
		document.getElementById("weathertype").style.color="#6D7B8D";
	}
	else if(weathertype.textContent =='Thunderstorm'){
		document.body.style.backgroundImage= "url('thunder.jpg')";
		document.getElementById("city").style.color="#78C7C7";
		document.getElementById("date").style.color="#78C7C7";
		document.getElementById("temp").style.color="#78C7C7";
		document.getElementById("weathertype").style.color="#78C7C7";
	}
	else if(weathertype.textContent =='Drizzle'){
		document.body.style.backgroundImage= "url('drizzle.jpg')";
		document.getElementById("city").style.color="#F5F5DC";
		document.getElementById("date").style.color="#F5F5DC";
		document.getElementById("temp").style.color="#F5F5DC";
		document.getElementById("weathertype").style.color="#F5F5DC";
	}
	else if(weathertype.textContent =='Mist'){
		document.body.style.backgroundImage= "url('mist.jpg')";
		document.getElementById("city").style.color="black";
		document.getElementById("date").style.color="black";
		document.getElementById("temp").style.color="black";
		document.getElementById("weathertype").style.color="black";
	}

}

// date manage
function dateManage(d) {
	let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	let months =["January","February","March","April","May","June","July","August","September","October","November","December"];

	let year=d.getFullYear();
	let month= months[d.getMonth()];
	let date=d.getDate();
	let day=days[d.getDay()];

	return `${date} ${month} ${day} , ${year}`;
}