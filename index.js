



const generateColors = () => {
  var url = "http://colormind.io/api/";
  var data = {
    model: "default",
  };

  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      displayColors(palette);
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));

  
};

const displayColors = (colors) => {
  const colorStopArr = document.querySelectorAll(".color__stop");

  for (let i=0; i < colors.length; i++) {
    colorStopArr[i].style.background = `rgba(${colors[i]})`
  }
};


generateColors();
document.querySelector(".generate__btn").addEventListener("click", generateColors);
