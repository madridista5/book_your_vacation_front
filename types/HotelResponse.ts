export interface HotelInfoResponse {
    _id: string,
    name: string,
    type: string,
    city: string,
    address: string,
    distance: number,
    photos: string[],
    title: string,
    desc: string,
    rooms: number[],
    cheapestPrice: number,
    featured: false,
    __v: number,
    rating?: number,
}