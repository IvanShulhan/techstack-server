import { body } from 'express-validator';

export const apartmentValidation = [
  body('name', 'Please enter a name of apartment').isLength({ min: 3, max: 98 }).isString(),
  body('description', 'Please enter the description of apartment').isLength({ min: 3, max: 998 }).isString(),
  body('rooms', 'please enter the number of rooms').isNumeric({ min: 1 }),
  body('price', 'Please enter the price of apartment').isNumeric({ min: 1 })
];
