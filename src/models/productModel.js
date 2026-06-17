const knex = require("../config/database");

class prodcutModel {
  async criarProduto(produto) {
    return await knex("produtos").insert(produto).returning("*");
  }

  async atualizarProduto(id, produto) {
    return await knex("produtos").where({ id }).update(produto).returning("*");
  }

  async buscarPorid(id) {
    return await knex("produtos").where({ id }).first();
  }

  async buscasrPorNome(nome) {
    return await knex("produtos").where("nome", "like", `%${nome}%`);
  }

  async buscarTodos(produtos) {
    return await knex("produtos").select("*");
  }

  async deleteProduto(id) {
    return await knex("produtos").where({ id }).del();
  }
}
