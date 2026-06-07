const serviceUsuario = require("../services/authServices");

const loginHandler = async (req, res) => {
  try {
    const { nome, telefone } = req.body;

    const usuarioAutenticado = await serviceUsuario.criarOuCadastrar(
      nome,
      telefone,
    );

    return res
      .status(200)
      .json({ message: "Login Successful", usuarioAutenticado });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro interno do servidor.", error: error.message });
  }
};
module.exports = loginHandler;
