import {
    Router
} from "express";
import {
    getMaterials,
    getMaterial,
    createMaterial,
    updateMaterial,
    deleteMaterial
} from "../controllers/materialsController.js";
import {
    authRequired
} from "../middlewares/validateToken.js";
import {
    validatorSchema
} from "../middlewares/validator.middleware.js";
import {
    createMaterialSchema
} from "../schema/material.schema.js";
const router = Router();

router.get('/materials', authRequired, getMaterials)
router.get('/material/:id', authRequired, getMaterial)
router.post('/createMaterial', authRequired, validatorSchema(createMaterialSchema), createMaterial)
router.put('/material/:id', authRequired, updateMaterial)
router.delete('/material/:id', authRequired, deleteMaterial)

export default router;