const { perfis } = require('../data/db')

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },
  perfil(usuario) {
    const selecionado = perfis
      .filter(perfil => perfil.id === usuario.perfil_id)
    return selecionado ? selecionado[0] : null
  }
}