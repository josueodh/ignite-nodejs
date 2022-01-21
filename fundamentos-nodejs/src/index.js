const express = require("express");

const app = express();

app.use(express.json());

/**
 * GET - Buscar uma infomação dentro do servidor
 * POST - Inserir uma infomação no servidor
 * PUT - Alterar uma infomação no servidor
 * PATCH - Alterar uma infomação no servidor
 * DELETE - Deletar uma informação no servidor
 */

/**
 *
 * Tipos de parâmetros
 *
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração (JSON)
 *
 */

app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 5", "Curso 2", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 5", "Curso 3", "Curso 4"]);
});

app.listen(3333);
