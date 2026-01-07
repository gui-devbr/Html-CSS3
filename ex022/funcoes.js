<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Mini Missão JS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #ffe6f0; /* fofinho estilo Hello Kitty */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    #mensagem {
      font-size: 1.5rem;
      color: #ff69b4; /* rosa Hello Kitty */
      padding: 20px;
      border: 2px dashed #ff1493;
      border-radius: 15px;
      background-color: #fff0f5;
    }
  </style>
</head>
<body>
  <div id="mensagem"></div>

  <script>
    let recorde = 40; // segundos de mergulho
    let hero = "Mavih";

    document.getElementById("mensagem").innerText =
      `Uau! ${hero}, ${recorde} segundos debaixo da água? 🐬 Herói nível Master! ✨`;
  </script>
</body>
</html>
