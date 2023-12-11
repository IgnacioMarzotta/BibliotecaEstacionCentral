import Reservation from "../models/reservation.model.js";
import Ejemplar from '../models/ejemplar.model.js';
import { updateDocumentStock } from "../controllers/documents.controller.js";
import { updateEjemplar } from "../controllers/ejemplares.controller.js";

export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user').populate('ejemplar').populate('document');
    res.json(reservations);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createReservation = async (req, res) => {
  try {
    const reservationDate = Date.now();
    const { user, document, returned } = req.body;
    const ejemplares = await Ejemplar.find({document: document._id}).find({available: true});
    const indice = Math.floor(Math.random() * ejemplares.length);
    const ejemplar = ejemplares[indice]._id;
    const newReservation = new Reservation({
      user,
      ejemplar,
      document,
      returned,
      reservationDate,
    });
    
    //Actualizar 
    await updateEjemplar(ejemplar, { available: false });
    //Actualizar stock del documento
    console.log("reservations.controller/document._id: "+document._id);
    await updateDocumentStock(document._id);

    await newReservation.save();
    res.json(newReservation);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation)
      return res.status(404).json({ message: "Reservation not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { returned, pickedUpOn } = req.body;
    const reserveUpdated = await Reservation.findOneAndUpdate(
      { _id: req.params.id },
      { returned, pickedUpOn },
      { new: true }
    );

    //Actualizar estado de ejemplar
    await updateEjemplar(reserveUpdated.ejemplar, { available: returned });

    return res.json(reserveUpdated);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReservation = async (req, res) => {
  try {
    const reserve = await Reservation.findById(req.params.id);
    if (!reserve) return res.status(404).json({ message: "Reservation not found" });
    return res.json(reserve);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};