const productModel = require("../models/productModel");

class productServices {
  async criarProduto(produto) {
    return await productModel.criarProduto(produto);
  }

  async atualizarProduto(id, produto) {
    return await productModel.atualizarProduto(id, produto);
  }

  async buscarPorId(id) {
    return await productModel.buscarPorId(id);
  }

  async buscarPorNome(name) {
    return await productModel.buscarPorNome(name);
  }

  async buscarTodos() {
    return await productModel.buscarTodos();
  }

  async deleteProduto(id) {
    return await productModel.deleteProduto(id);
  }
}

module.exports = new productServices();
