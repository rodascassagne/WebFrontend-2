
var cityy = document.querySelector('.name');
var temperaturee = document.querySelector('.temp');
var descriptionn = document.querySelector('.desc');

var count = document.querySelector('.country');
var fee = document.querySelector('.feel');
var hum = document.querySelector('.humidity');
var x = document.querySelector('.input_text'); 
var y= document.querySelector('.submit');


y.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+x.value+'&appid=4808ed909462b165b8f2a23ba4a56b89')
.then(response => response.json())
.then(data => {
 
  var countt = data['sys']['country'];
 
  var feee = data['main']['feels_like'];
 
  var humm = data['main']['humidity'];
 
  var city = data['name'];
 
  var temperature = data['main']['temp'];
 
  var description = data['weather'][0]['description'];


  count.innerHTML = "Country:     "+ countt;
 
  fee.innerHTML = "Feels Like:    "+feee+ " Kelvins ";
 
  hum.innerHTML = "Humidity:    "+humm;

  cityy.innerHTML = "City:    "+ city;
 
  temperaturee.innerHTML = "Temperature:    "+temperature+ " Kelvins ";
 
  descriptionn.innerHTML = "Description:    "+description;

})

.catch(err => alert("PLEASE TRY AGAIN"));
})
