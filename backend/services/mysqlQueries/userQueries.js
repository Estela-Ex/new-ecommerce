const moment = require("moment");
const md5 = require("md5"); ;

const db = require("../mysql");

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM clientes WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
  
};

userQueries.addUser = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let userObj = {
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      password: md5(userData.password),
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      userRole: 0,
    };
    return await db.query(
      "INSERT INTO clientes SET ?",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//borrar usuario//
userQueries.deleteUser = async (id) => {
        let conn = null;
        try {
            conn = await db.createConnection();
            return await db.query(
              "delete from clientes where id= ?",
              id,
              "delete",
              conn
            );
        } catch (e) {
            throw new Error(e);
        } finally {
            conn && (await conn.end());
        }
};
    // Buscar usuario por el id
userQueries.getUserById = async (id) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el id.
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM clientes WHERE id = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
};

module.exports = userQueries;