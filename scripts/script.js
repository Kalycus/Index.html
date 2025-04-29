<!DOCTYPE html>
<html>
<body>

<a href="https://www.tecmundo.com.br" target="_blank" rel="noopener noreferrer">
  Visite o TecMundo para notícias de tecnologia!
</a>

<br><br>

<button id="meuBotao">Clique para ver uma mensagem!</button>

<p id="mensagem" style="display: none;">
  "Acredite em si mesmo e todo o resto virá naturalmente!"
</p>

<script>
  document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').style.display = 'block';
  });
</script>

</body>
</html> 