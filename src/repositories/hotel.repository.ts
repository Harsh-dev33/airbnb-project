import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDto, updateHotelDto } from "../dto/hotel.dto";


export async function createHotel(hotelData:createHotelDto){
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        ratingCount: hotelData.ratingCount,
    });

    logger.info(`Hotel created with id: ${hotel.id}`);
    return hotel;
}   

export async function getHotelById(id: number) {
const hotel = await Hotel.findOne({
    where: {
        id,
        deletedAt: null
    }
});

    if (!hotel) {
        logger.warn(`Hotel not found with id: ${id}`);
        return null;
     }

    logger.info(`Hotel found with id: ${hotel.id}`);
    return hotel;
}

export async function getAllHotels() {
    const hotels = await Hotel.findAll({
        where: {
            deletedAt: null
        }
    });

    if(hotels.length === 0) {

        logger.warn(`No hotels found`);
        return [];
    }

    logger.info(`Found ${hotels.length} hotels`);
    return hotels;
}

export async function SoftDeleteHotel(id: number) {
    const hotel = await Hotel.findByPk(id);

     if (!hotel) {
        logger.warn(`Hotel not found with id: ${id}`);
        return null;
     }

    hotel.deletedAt = new Date();
    await hotel.save();
    logger.info(`Hotel soft deleted with id: ${id}`);
    return hotel;
}

export async function updateHotel(hotelData:updateHotelDto, id: number) {
    const hotel = await Hotel.findByPk(id);

    if (!hotel) {
        logger.warn(`Hotel not found with id: ${id}`);
        return null;
    }

    await hotel.update(hotelData);
    logger.info(`Hotel updated with id: ${id}`);
    return hotel;
}