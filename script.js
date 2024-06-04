(function() {
  var newHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hackeado por el Culto Misterioso</title>
<style>
body {
  background-color: #000;
  color: #0f0;
  font-family: monospace;
  text-align: center;
}

.container {
  margin-top: 100px;
}

.text {
  font-size: 24px;
}

.blink {
  animation: blink-animation 1s steps(5, start) infinite;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
</head>
<body>
<div class="container">
  <h1>Hackeado por el Culto Misterioso</h1>
  <p class="text">Estamos vigilando tus movimientos...</p>
  <p class="text">No puedes escapar de nosotros...</p>
  <p class="text">Nuestra influencia es omnipresente...</p>
  <p class="text">Tu destino está sellado...</p>
  <p class="text">¡Prepárate para enfrentar las consecuencias!</p>
  <p class="text blink">...........................</p>
</div>
</body>
</html>
`;

  document.open();
  document.write(newHTML);
  document.close();
})();
