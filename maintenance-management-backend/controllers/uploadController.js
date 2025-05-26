exports.handleUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No se envió archivo' });
  }

  const { originalname, mimetype, size } = req.file;
  res.json({
    success: true,
    file: { originalname, mimetype, size }
  });
};
