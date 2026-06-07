const knex = require("../config/database");

class usuarioModel {
  async buscarPorTelefone(telefone) {
    return await knex("usuarios").where({ telefone }).first();
  }

  async criar(nome, telefone) {
    return await knex("usuarios").insert({ nome, telefone }).returning("*");
  }
}

module.exports = new usuarioModel();
