const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola() {
    return 'Basta retornar uma string'
  },
  horaAtual() {
    return `${new Date()}`
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Paulo',
      email: 'teste@teste.com',
      idade: 26,
      salario_real: 999.99,
      vip: false
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Televisão',
      preco: 3000.00,
      desconto: 1050.00
    }
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b
    return Array(6).fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
  },
  usuarios() {
    return usuarios
  },
  usuario(_, { id }) {
    const selecionado = usuarios
      .filter(user => user.id === id)
    return selecionado ? selecionado[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const selecionado = perfis
      .filter(perfil => perfil.id === id)
    return selecionado ? selecionado[0] : null
  }
}