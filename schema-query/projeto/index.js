const { ApolloServer, gql } = require('apollo-server')

const usuarios = [{
  id: 1,
  nome: 'Joao',
  email: 'testeJoao@teste.com',
  idade: 24,
  perfil_id: 1
}, {
  id: 2,
  nome: 'Rafael',
  email: 'testeRafa@teste.com',
  idade: 31,
  perfil_id: 2
}, {
  id: 3,
  nome: 'Daniela',
  email: 'testeDaniela@teste.com',
  idade: 23,
  perfil_id: 1
}]

const perfis = [
  { id: 1, nome: 'Comum' },
  { id: 2, nome: 'Administrador' }
]

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: Int
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    perfil: Perfil
  }
  
  type Perfil {
    id: Int!
    nome: String!
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    horaAtual: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    perfis: [Perfil]
    perfil(id: Int): Perfil
  }
`

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real
    },
    perfil(usuario) {
      const selecionado = perfis
        .filter(perfil => perfil.id === usuario.perfil_id)
      return selecionado ? selecionado[0] : null
    }
  },
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto)
        return produto.preco - produto.desconto
      else
        return produto.preco
    }
  },

  Query: {
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
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})