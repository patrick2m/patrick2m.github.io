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

  // Função para ativar as funções de acordo com a língua
  
  addButtonEvents() {
    this.botaoTema.addEventListener('click', () => {
      const body = document.body
      body.classList.toggle('dark-theme');
      this.trocarTema();
    })

  }

  // Função que faz o código carregar e adiciona a lingaguem português como inicial

  init() {
    if (this.botaoTema) {
      this.addButtonEvents();
      this.botaoTema.classList.add('iconeTemaClaro');
    }
  }
}