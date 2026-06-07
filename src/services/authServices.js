const jwt = require("jsonwebtoken");
const clienteModel = require("../models/usuarioModel");

class authServices {
  async criarOuCadastrar(nome, telefone) {
    let usuario = await clienteModel.buscarPorTelefone(telefone);

    if (!usuario) {
      if (!nome && !telefone) {
        throw new Error(
          "Nome e telefone são obrigatórios para criar um novo usuário.",
        );
      }
      usuario = await clienteModel.criar(nome, telefone);
    }

    const payload = { id: usuario.id, telefone: usuario.telefone };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return {
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        telefone: usuario.telefone,
      },
      token,
      mensagem: "Usuário autenticado com sucesso.",
    };
  }
}

// class authServices {
//   async autentica(nome, telefone) {
//     const usuario = await clienteModel.buscarPorTelefone(telefone);

//     if (!usuario) {
//       throw new Error("Usuário não encontrado!");
//     }

//     return {
//       id: usuario.id,
//       nome: usuario.nome,
//       telefone: usuario.telefone,
//     };
//   }

//   async criarUsuario(nome, telefone) {
//     const usuarioExistente = await clienteModel.buscarPorTelefone(telefone);

//     if (usuarioExistente) {
//       throw new Error("Usuário já existe com esse telefone!");
//     }

//     const novoUsuario = await clienteModel.criar(nome, telefone);

//     return {
//       novoUsuario,
//     };
//   }
// }

module.exports = new authServices();
