const usuarios = [{
  id: 1,
  nome: 'Joao',
  email: 'testeJoao@teste.com',
  idade: 24,
  perfil_id: 1,
  status: 'ATIVO',
}, {
  id: 2,
  nome: 'Rafael',
  email: 'testeRafa@teste.com',
  idade: 31,
  perfil_id: 2,
  status: 'INATIVO',
}, {
  id: 3,
  nome: 'Daniela',
  email: 'testeDaniela@teste.com',
  idade: 23,
  perfil_id: 1,
  status: 'BLOQUEADO',
}]

const perfis = [
  { id: 1, nome: 'Comum' },
  { id: 2, nome: 'Administrador' }
]

module.exports = {
  usuarios,
  perfis,
}