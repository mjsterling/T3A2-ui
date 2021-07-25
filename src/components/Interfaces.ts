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
