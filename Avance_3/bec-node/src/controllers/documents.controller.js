import Document from "../models/document.model.js";

export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find(/* FILTRO */);
    res.json(documents);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDocument = async (req, res) => {
  try {
    const { title, author, year, type, genre, img, price, stock, desc } = req.body;
    const newDocument = new Document({
      title,
      author,
      year, 
      type, 
      genre,
      img,
      price,
      stock,
      desc
    });
    await newDocument.save();
    res.json(newDocument);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    if (!deletedDocument)
      return res.status(404).json({ message: "Document not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDocument = async (req, res) => {
  try {
    const { title, author, year, type, genre, img, price, stock, desc } = req.body;
    const docUpdated = await Document.findOneAndUpdate(
      { _id: req.params.id },
      { title, author, year, type, genre, img, price, stock, desc },
      { new: true }
    );
    return res.json(docUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Document not found" });
    return res.json(doc);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};