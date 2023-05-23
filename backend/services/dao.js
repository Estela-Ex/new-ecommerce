const userQueries = require("./mysqlQueries/userQueries");

const dao = {};

// Buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);
// Añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);
// Buscar un usuario por el id
dao.getUserById = async (id) => await userQueries.getUserById(id);

// Eliminar un usuario
dao.deleteUser = async (id) => await userQueries.deleteUser(id);

module.exports = dao;
