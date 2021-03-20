const { usuarios, proximoId } = require('../data/db')

module.exports = {
  // { nome, email, idade }
  novoUsuario(_, args) {
    const emailExistente = usuarios
      .some(u => u.email === args.email)

    if (emailExistente) {
      throw new Error('Email cadastrado')
    }

    const novo = {
      id: proximoId(),
      ...args,
      perfil_id: 1,
      status: 'ATIVO'
    }
    usuarios.push(novo)
    return novo
  },

  excluirUsuario(_, { id }) {
    const indiceUsuario = usuarios
      .findIndex(u => u.id === id)

    const usuarioNaoEncontrado = indiceUsuario < 0
    if (usuarioNaoEncontrado) return null

    const usuarioExcluido = usuarios.splice(indiceUsuario, 1)
    return usuarioExcluido ? usuarioExcluido[0] : null
  },

  alterarUsuario(_, args) {
    const indiceUsuario = usuarios
      .findIndex(u => u.id === args.id)

    const usuarioNaoEncontrado = indiceUsuario < 0
    if (usuarioNaoEncontrado) return null

    const usuario = {
      ...usuarios[indiceUsuario],
      ...args
    }

    usuarios.splice(indiceUsuario, 1, usuario)
    return usuario

  }
}