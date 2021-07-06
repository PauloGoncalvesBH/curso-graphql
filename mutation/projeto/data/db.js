let idUsuarios = 1
let idPerfil = 1

function proximoIdUsuario() {
  return idUsuarios++
}

function proximoIdPerfil() {
  return idPerfil++
}

const perfis = [
  { id: proximoIdPerfil(), nome: 'comum' },
  { id: proximoIdPerfil(), nome: 'administrador' }
]

const usuarios = [{
  id: proximoIdUsuario(),
  nome: 'João Silva',
  email: 'jsilva@zemail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: proximoIdUsuario(),
  nome: 'Rafael Junior',
  email: 'rafajun@wemail.com',
  idade: 31,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: proximoIdUsuario(),
  nome: 'Daniela Smith',
  email: 'danismi@umail.com',
  idade: 24,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

module.exports = {
  usuarios,
  perfis,
  proximoIdUsuario,
}