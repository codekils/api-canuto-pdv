const knex = require("../config/database");

class prodcutModel {
  async criarProduto(produto) {
    return await knex("produtos").insert(produto).returning("*");
  }

  async atualizarProduto(id, produto) {
    return await knex("produtos").where({ id }).update(produto).returning("*");
  }

  async buscarPorId(id) {
    return await knex("produtos").where({ id }).first();
  }

  async buscarPorNome(name) {
    return await knex("produtos").where("name", "ilike", `%${name}%`);
  }

  async buscarTodos(produtos) {
    return await knex("produtos").select("*");
  }

  async deleteProduto(id) {
    return await knex("produtos").where({ id }).del();
  }
}

module.exports = new prodcutModel();
