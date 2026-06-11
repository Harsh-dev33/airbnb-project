import { createHotel, getHotelById, getAllHotels, SoftDeleteHotel, updateHotel } from "../repositories/hotel.repository";
import { createHotelDto, updateHotelDto } from "../dto/hotel.dto";

export async function createHotelService(hotelData:createHotelDto) {
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id: number) {
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await getAllHotels();
    return hotels;
}

export async function deleteHotelService(id: number) {
    const hotel = await SoftDeleteHotel(id);
    return hotel;
}

export async function updateHotelService(hotelData:updateHotelDto, id: number) {
    const hotel = await updateHotel(hotelData, id);
    return hotel;
}