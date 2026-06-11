import express from 'express';
import { createHotelHandler, deleteHotelHandler, getAllHotelsHandler, getHotelByIdHandler, updateHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema, hotelSchemaUpdate } from '../../validators/hotel.validator';


const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema),createHotelHandler); 
hotelRouter.get('/:id', getHotelByIdHandler); 

hotelRouter.get('/', getAllHotelsHandler);
hotelRouter.put('/:id', validateRequestBody(hotelSchemaUpdate), updateHotelHandler);
hotelRouter.delete('/:id', deleteHotelHandler);

export default hotelRouter;