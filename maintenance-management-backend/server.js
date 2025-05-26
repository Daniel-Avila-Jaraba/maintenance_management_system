const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// Esto habilita CORS (Cross-Origin Resource Sharing) para permitir conexión desde Angular
app.use(cors());

// Configura destino de los archivos subidos
const upload = multer({ dest: 'uploads/' });

// Ruta para recibir archivos
app.post('/api/documents', upload.single('file'), (req, res) => {
  console.log('Archivo recibido:', req.file);
  res.json({
    success: true,
    file: {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    }
  });
});

// Inicia el servidor
app.listen(4000, () => {
  console.log('Backend en http://localhost:4000');
});
