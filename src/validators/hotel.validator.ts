import {z} from 'zod';

export const hotelSchema = z.object({
    name: z.string().min(1, 'Hotel name is required'),
    address: z.string().min(1, 'Hotel address is required'),
    location: z.string().min(1, 'Hotel location is required'),
    rating: z.number().min(0, 'Rating must be at least 0').max(10, 'Rating cannot exceed 10').optional(),
    ratingCount: z.number().min(0, 'Rating count must be at least 0').optional(),
});
export const hotelSchemaUpdate = z.object({
    name: z.string().min(1, 'Hotel name is required').optional(),
    address: z.string().min(1, 'Hotel address is required').optional(),
    location: z.string().min(1, 'Hotel location is required').optional(),
    rating: z.number().min(0, 'Rating must be at least 0').max(10, 'Rating cannot exceed 10').optional(),
    ratingCount: z.number().min(0, 'Rating count must be at least 0').optional(),
});