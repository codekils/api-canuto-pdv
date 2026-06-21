const { get } = require("../routes/routers");
const serviceProduct = require("../services/productServices");

const createProductHanddler = async (req, res) => {
  try {
    const { name, quantidade, valor, descricao, foto } = req.body;

    const produtoCriado = await serviceProduct.criarProduto({
      name,
      quantidade,
      valor,
      descricao,
      foto,
    });
    res
      .status(201)
      .json({ message: "Produto criado com sucesso.", produtoCriado });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor.", error: error.message });
  }
};

const updateProductHanddler = async (req, res) => {
  const { id } = req.params;
  const { name, quantidade, valor, descricao, foto } = req.body;

  try {
    const produtoExistente = await serviceProduct.buscarPorId(id);

    if (!produtoExistente) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    const produtoAtualizado = await serviceProduct.atualizarProduto(id, {
      name,
      quantidade,
      valor,
      descricao,
      foto,
    });
    res
      .status(200)
      .json({ message: "Produto atualizado com sucesso.", produtoAtualizado });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor.", error: error.message });
  }
};

const getProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await serviceProduct.buscarPorId(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    res.status(200).json(produto);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor.", error: error.message });
  }
};

const getProductByNameHanddler = async (req, res) => {
  try {
    const { name } = req.query;
    const produtos = await serviceProduct.buscarPorNome(name);

    if (produtos.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhum produto encontrado com esse nome." });
    }
    res.status(200).json(produtos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor.", error: error.message });
  }
};

const getAllProductsHanddler = async (req, res) => {
  try {
    const produtos = await serviceProduct.buscarTodos();
    res.status(200).json(produtos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno do servidor.", error: error.message });
  }
};

const deleteProductHanddler = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await serviceProduct.buscarPorId(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    await serviceProduct.deleteProduto(id);
    res.status(200).json({ message: "Produto deletado com sucesso." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno do servidor,", error: error.message });
  }
};

module.exports = {
  createProductHanddler,
  getProductByIdHandler,
  getProductByNameHanddler,
  getAllProductsHanddler,
  deleteProductHanddler,
  updateProductHanddler,
};
