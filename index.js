



const generateColors = () => {
  var url = "http://colormind.io/api/";
  var data = {
    model: "default",
  };

  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      console.log(palette);
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
};

document.querySelector(".generate__btn").addEventListener("click", generateColors);
