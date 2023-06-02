function convertTemperature() {

  var getChoice = document.getElementById('temp').value;

  if  (getChoice == "toF") {
    calculateToF();
  } else {
    calculateToC();
  }
}

function calculateToF() {
    var celsius = parseFloat(document.getElementById('temperature').value);
  var fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById('result').innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);

}

function calculateToC() {
 var fahrenheit = parseFloat(document.getElementById('temperature').value);
  var celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('result').innerHTML = "Celsius: " + celsius.toFixed(2);
}

    