const productController = {};


// controlador para subir una o varias imágenes a nuestro servidor y base de datos
productController.uploadImage = async (req, res) => {
    // console.log(req.files);
    try {
      // Controlamos cuando el objeto files sea null
      // Controlamos si nos viene algún tipo de archivo en el objeto files
      if (!req.files ||req.files ===null|| Object.keys(req.files).length === 0) {
        return res.status(400).send("No se ha cargado ningún archivo");
      }
      // 1 archivo [{}] , >1 archivo [[{},{},...]]
      // Obtenemos un array de objetos con todas las imagenes
      const images = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen;
      // Recorremos el array para procesar cada imagen
      images.forEach(async (image) => {
        // Ya podemos acceder a las propiedades del objeto image.
        // Obtenemos la ruta de la imagen.
        let uploadPath = path.join(
          __dirname,
          "../public/product/" + image.name
        );
        // Usamos el método mv() para ubicar el archivo en nuestro servidor
        image.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
        await dao.addImage({ name: image.name, path: uploadPath });
      });
      return res.send("Imagen subida!");
    } catch (e) {
      console.log(e.message);
      return res.status(400).send(e.message);
    }
  };


module.exports = productController;
