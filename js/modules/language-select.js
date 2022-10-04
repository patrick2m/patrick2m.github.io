export default class LanguageSelect {
  
  // Construtor da classe, recebendo o id dos botões

  constructor(ptButton, enButton) {
    this.ptButton = document.getElementById(ptButton);
    this.enButton = document.getElementById(enButton);
    this.activeClass = 'ativo'
  }

  // Função para remover o atributo 'ativo'

  adicionaAtivo(lingua) {
    const elements = document.querySelectorAll(lingua);
    elements.forEach((item) => {
      item.classList.add(this.activeClass);
    })
  }
  // Função para adicionar o atributo 'ativo'

  removeAtivo(lingua) {
    const elements = document.querySelectorAll(lingua);
    elements.forEach((item) => {
      item.classList.remove(this.activeClass);
    })   
  }

  // Função para ativar as funções de acordo com a língua
  
  addButtonEvents() {
    this.ptButton.addEventListener('click', () => {
      this.removeAtivo('.en-us');
      this.adicionaAtivo('.pt-br');
      console.log('portugues ativado');
    })
    this.enButton.addEventListener('click', () => {
      this.removeAtivo('.pt-br');
      this.adicionaAtivo('.en-us');
      console.log('Inglês ativado');
    })
  }

  // Função que faz o código carregar e adiciona a lingaguem português como inicial

  init() {
    if (this.ptButton && this.enButton) {
      this.adicionaAtivo('.pt-br');
      this.addButtonEvents();
    }
  }
}