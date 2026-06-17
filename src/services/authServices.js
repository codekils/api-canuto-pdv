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

module.exports = new authServices();
