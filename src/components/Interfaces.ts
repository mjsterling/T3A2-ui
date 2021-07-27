export interface BookingRequest {
  id?: number;
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
  created_at?: Date;
}
export interface RoomItf {
  id: number;
  bookings: Booking[];
  number: number;
  capacity: number;
}
export interface Booking {
  id?: number;
  room_id?: number;
  reference_number?: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  num_adults: number;
  num_children: number;
  num_dogs: number;
  dates?: Date[];
  created_at?: Date;
}
