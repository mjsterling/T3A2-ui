export interface BookingRequest {
  checkIn?: Date;
  checkOut?: Date;
  reference_number?: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  num_adults: number;
  num_children: number;
  num_dogs: number;
  dates?: Date[];
}
export interface RoomItf {
  bookings: Booking[];
  number: number;
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
  dates?: Date[];
}
