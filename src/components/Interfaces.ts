export interface BookingRequest {
  checkIn?: Date;
  checkOut?: Date;
  referenceNumber?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numAdults: number;
  numChildren: number;
  numDogs: number;
  dates?: Date[];
  status?: string;
}
export interface Room {
  bookings: Booking[];
  room_number: number;
}
export interface Booking {
  reference_number?: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  num_adults: number;
  num_children: number;
  num_dogs: number;
  dates?: string[];
}