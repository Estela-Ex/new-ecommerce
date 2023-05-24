const db = require("../mysql");
const moment = require ("moment");

const productQueries = {};

productQueries.addImage = async (imageData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos de la imagen a guardar en la base de datos.
    // Usamos la libreria momentjs para registrar la fecha actual
    let imageObj = {
      name: imageData.name,
      path: imageData.path,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query("INSERT INTO images SET ?", imageObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

module.exports = productQueries;