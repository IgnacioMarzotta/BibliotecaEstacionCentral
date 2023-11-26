import { Router } from "express";
import {
  createDocument,
  deleteDocument,
  getDocument,
  getDocuments,
  updateDocument,
} from "../controllers/documents.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDocumentSchema } from "../schemas/document.schema.js";

const router = Router();

router.get("/documents", getDocuments);

router.post("/documents", validateSchema(createDocumentSchema), createDocument);

router.get("/documents/:id", getDocument);

router.get("/document/:id", getDocument);

router.put("/documents/:id", updateDocument);

router.delete("/documents/:id", deleteDocument);

export default router;
