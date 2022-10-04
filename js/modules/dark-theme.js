export default class DarkTheme {
  
  // Construtor da classe

  constructor(botaoTema) {
    this.botaoTema = document.getElementById(botaoTema);
  }

  // Função para trocar tema

  trocarTema() {
    this.botaoTema.classList.toggle('iconeTemaClaro');
    this.botaoTema.classList.toggle('iconeTemaEscuro');
  }

  // Função para ativar o tema escuro e trocar o icone do botão
  
  addButtonEvents() {
    this.botaoTema.addEventListener('click', () => {
      const body = document.body
      body.classList.toggle('dark-theme');
      this.trocarTema();
    })

  }

  // Função que faz o código carregar e adiciona o tema claro para o botão como inicial

  init() {
    if (this.botaoTema) {
      this.addButtonEvents();
      this.botaoTema.classList.add('iconeTemaClaro');
    }
  }
}