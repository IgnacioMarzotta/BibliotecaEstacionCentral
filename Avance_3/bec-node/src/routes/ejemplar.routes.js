import { Router } from "express";
import {
  createEjemplar,
  deleteEjemplar,
  getEjemplar,
  getEjemplares,
  updateEjemplar,
} from "../controllers/ejemplares.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createEjemplarSchema } from "../schemas/ejemplar.schema.js";

const router = Router();

router.get("/ejemplares", getEjemplares);

router.post("/ejemplares", validateSchema(createEjemplarSchema), createEjemplar);

router.get("/ejemplares/:id", getEjemplar);

router.get("/ejemplar/:id", getEjemplar);

router.put("/ejemplares/:id", updateEjemplar);

router.delete("/ejemplares/:id", deleteEjemplar);

export default router;
