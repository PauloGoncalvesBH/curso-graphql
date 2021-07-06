// novoPerfil, excluirPerfil, alterarPerfil

const { perfis, proximoIdUsuario } = require('../../data/db')

function indicePerfil(filtro) {
  if (!filtro) return -1
  const { id, nome } = filtro

  if(id) {
    return perfis
      .findIndex(u => u.id === id)
  } else if (nome) {
    return perfis
      .findIndex(u => u.nome === nome)
  }
  return -1
}

module.exports = {
  // { nome }
  novoPerfil(_, { dados }) {
    const nomeExiste = perfis
      .some(u => u.nome === dados.nome)

    if (nomeExiste) {
      throw new Error('Perfil já cadastrado')
    }

    const novo = {
      id: proximoIdUsuario(),
      ...dados
    }
    console.log(perfis);
    perfis.push(novo)
    return novo
  },

  excluirPerfil(_, { filtro }) {
    const usuarioNaoEncontrado = indicePerfil(filtro) < 0
    if (usuarioNaoEncontrado) return null

    const usuarioExcluido = perfis.splice(indicePerfil, 1)
    return usuarioExcluido ? usuarioExcluido[0] : null
  },

  alterarPerfil(_, { filtro, dados }) {
    const i = indicePerfil(filtro)
    if (i < 0) return null

    const usuario = {
      ...perfis[i],
      ...dados
    }

    perfis.splice(i, 1, usuario)
    return usuario
  }
}