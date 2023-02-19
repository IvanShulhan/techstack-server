import express from 'express';
import * as apartmentController from '../controllers/apartment.controller.js';
import { apartmentValidation } from '../validations/apartment.validations.js';
import handleValidationErrors from '../utils/handleValidationErrors.js';

export const router = express.Router();

router.post('/', apartmentValidation, handleValidationErrors, apartmentController.create);
router.put('/:id', apartmentValidation, handleValidationErrors, apartmentController.update);
router.get('/', apartmentController.getAll);
router.delete('/:id', apartmentController.removeOne);


