import { Router } from "express";
import {
  createReservation,
  deleteReservation,
  getReservation,
  getReservations,
  updateReservation,
} from "../controllers/reservations.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createReservationSchema } from "../schemas/reservation.schema.js";

const router = Router();

router.get("/reservations", auth, getReservations);

router.post("/reservations", auth, validateSchema(createReservationSchema), createReservation);

router.get("/reservations/:id", auth, getReservation);

router.get("/reservation/:id", auth, getReservation);

router.put("/reservations/:id", auth, updateReservation);

router.delete("/reservations/:id", auth, deleteReservation);

export default router;
