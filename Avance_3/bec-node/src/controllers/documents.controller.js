import Document from "../models/document.model.js";
import Ejemplar from "../models/ejemplar.model.js";

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
    const { title, author, year, type, genre, img, price, desc } = req.body;
    const newDocument = new Document({
      title,
      author,
      year, 
      type, 
      genre,
      img,
      price,
      desc
    });
    await newDocument.save();v
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

    await Ejemplar.deleteMany({ document: req.params.id });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDocument = async (req, res) => {
  try {
    const { title, author, year, type, genre, img, price, desc } = req.body;

    // Actualizar el documento con el stock
    const docUpdated = await Document.findOneAndUpdate(
      { _id: req.params.id },
      { title, author, year, type, genre, img, price, desc },
      { new: true }
    );

    await updateDocumentStock(req.params.id);
    // Enviar la respuesta desde updateDocument

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

export const updateDocumentStock = async (documentId) => {
  try {
    console.log("DocumentID: "+documentId);
    const ejemplares = await Ejemplar.find({ document: documentId });
    const ejemplaresFiltered = ejemplares.filter((item) => item.available === true)
    const newStock = ejemplaresFiltered.length;

    const updatedDoc = await Document.findByIdAndUpdate(
      documentId,
      { $set: { stock: newStock } },
      { new: true }
    );

    if (!updatedDoc) {
      throw new Error("Document not found");
    }

  } catch (error) {
    // Manejo de errores si es necesario
    console.error("Error updating document stock:", error.message);
    throw error; // Puedes decidir si lanzar el error o manejarlo de alguna otra manera
  }
};

export const getFilteredDocuments = async (req, res) => {
  try {
      const { filter } = req.query;
      const filterObject = filter ? JSON.parse(filter) : {};

      // Lógica para obtener documentos filtrados según filterObject
      const filteredDocuments = await Document.find(filterObject);

      res.json(filteredDocuments);
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};
