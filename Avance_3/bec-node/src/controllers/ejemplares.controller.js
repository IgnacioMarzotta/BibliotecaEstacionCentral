import Ejemplar from "../models/ejemplar.model.js";
import { updateDocumentStock } from "../controllers/documents.controller.js";

export const getEjemplares = async (req, res) => {
  try {
    const ejemplares = await Ejemplar.find(/* FILTRO */);
    res.json(ejemplares);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEjemplar = async (req, res) => {
  try {
    const { document, available } = req.body;
    const newEjemplar = new Ejemplar({
      document,
      available
    });
    await newEjemplar.save();

    //Al crear un ejemplar, actualizar stock
    await updateDocumentStock(document);
    
    res.json(newEjemplar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEjemplar = async (req, res) => {
  try {
    const deletedEjemplar = await Ejemplar.findByIdAndDelete(req.params.id);
    if (!deletedEjemplar)
      return res.status(404).json({ message: "Ejemplar not found" });

    //Al eliminar un ejemplar, actualizar stock
    await updateDocumentStock(document);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEjemplar = async (ejemplar, { available }) => {
  try {
    console.dir("ejemplar._id: "+ejemplar._id);
    console.dir("available: "+available);
    const ejUpdated = await Ejemplar.findOneAndUpdate(
      { _id: ejemplar._id },
      { available },
      { new: true }
      );
      
    console.dir("ejUpdated: "+ejUpdated);
    //Siempre que se actualice un ejemplar, recalcular stock
    await updateDocumentStock(ejUpdated.document);
    
    return ejUpdated;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getEjemplar = async (req, res) => {
  try {
    const ej = await Ejemplar.findById(req.params.id);
    if (!ej) return res.status(404).json({ message: "Ejemplar not found" });
    return res.json(ej);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};