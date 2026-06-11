import { createHotelService, getHotelByIdService, getAllHotelsService, deleteHotelService, updateHotelService } from "../services/hotel.service";
import { NextFunction, Request, Response } from "express";
import { createHotelDto, updateHotelDto } from "../dto/hotel.dto";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const hotelResponse = await createHotelService(req.body as createHotelDto);
    
    res.status(StatusCodes.CREATED).json({
      message: "Hotel created successfully",
      hotel: hotelResponse
    });
  } catch (error) {
    next(error);
  }
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
      message: "Hotel retrieved successfully",
      hotel: hotelResponse
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const hotels = await getAllHotelsService();
    res.status(StatusCodes.OK).json({
      message: "Hotels retrieved successfully",
      hotels: hotels
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
  try {
    await deleteHotelService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
      message: "Hotel deleted successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const hotelResponse = await updateHotelService(req.body as updateHotelDto, Number(req.params.id));

    res.status(StatusCodes.OK).json({
      message: "Hotel updated successfully",
      hotel: hotelResponse
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}


