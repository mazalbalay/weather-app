//variable
let body = document.body;
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output-containrt");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
let p5 = document.querySelector(".p5");
let p6 = document.querySelector(".p6");
let icon = document.querySelector(".icon");
let mainContainer = document.querySelector(".main-container");
let h2 = document.querySelector("h2");
// variable
//changeBg fun
function changeBg(response) {
  if (response == "01n" ||response == "02n" ||response == "03n" ||response == "04n" ||response == "09n" ||response == "10n" ||response == "11n" ||response == "13n" ||response == "50n"
  ) {
    body.style.cssText = `background-image: url(img/night1.jpeg);
    background-color: rgba(0, 0, 0, 0.425);
    background-blend-mode: color;  background-size:565px;
    background-repeat: no-repeat;`;
    console.log("black");
    mainContainer.style.cssText = ` background-color: rgba(159, 149, 149, 0.367);
    -webkit-box-shadow: 1px 2px 18px 10px rgba(255, 255, 255, 0.518); 
    box-shadow: 1px 2px 18px 10px rgba(255, 255, 255, 0.451);`;
    h2.style.cssText = `text-shadow: 2px 2px 0px #8e6a6a, 5px 4px 0px rgba(0,0,0,0.15);color: #55585bfc;`
  } else {
    body.style.cssText = ` background-image: url(img/day.jpg);
    background-color: rgba(36, 45, 93, 0.397);
    background-blend-mode: color;
    background-size:710px;
    background-repeat: no-repeat;`;
    console.log("white");
    mainContainer.style.cssText = `  background-color: rgba(35, 31, 31, 0.367);
    -webkit-box-shadow: 1px 2px 18px 10px rgba(255, 255, 255, 0.518); 
    box-shadow: 1px 2px 18px 10px rgba(255, 255, 255, 0.451);`;
    h2.style.cssText = `text-shadow: 2px 2px 0px #b5b7bf, 5px 4px 0px rgba(0,0,0,0.15);`;
  }
}
//changeBg fun
// addEventListener btn
btn.addEventListener("click", function () {
  let cityName = input.value;
  if (cityName != " ") {
    output.style = "display: flex !important;";
    let desc;
    let temp;
    let tempMin, tempMax, tempAll;
    let humidity;
    // let iconData
    let time = new Date();
  }
  //url_aip
  const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=24e525f382321be47dc6551049632d84&units=metric`;
  fetch(URL_API)
    .then(function (response) {
      console.log(URL_API);
      return response.json();
    })
    .then(function (data) {
      desc = data.weather[0].description;
      temp = data.main.temp;
      tempMin = data.main.temp_min;
      tempMax = data.main.temp_max;
      humidity = data.main.humidity;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      icon.style = "width: 145px;";

      changeBg(data.weather[0].icon);
      temp = temp + "&#8451";
      p1.innerHTML = data.name;
      p2.innerHTML = temp;
      p3.innerHTML = `Min : ${tempMin}&#8451`;
      p4.innerHTML = ` Max : ${tempMax}&#8451`;
      p5.innerHTML = desc;
    });
  //url_aip
});
// addEventListener btn
