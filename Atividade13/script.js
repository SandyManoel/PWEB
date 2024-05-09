const janela = document.getElementById('janela');

janela.addEventListener('mouseover', function() {
  this.innerHTML = "Janela aberta"
  this.style.backgroundImage = "url('img/janelaaberta.png')";
  
});

janela.addEventListener('mouseout', function() {
  this.innerHTML = "Janela fechada"
  this.style.backgroundImage = "url('img/janelafechada.png')";
});

janela.addEventListener('click', function() {
  this.innerHTML = "Janela quebrada"
  this.style.backgroundImage = "url('img/janelaquebrada.png')";
});
