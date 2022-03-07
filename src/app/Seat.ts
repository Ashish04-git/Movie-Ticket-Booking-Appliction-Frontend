import { Ticket } from "./Ticket";

export class Seat{

    public seatId: number;
    public seatNumber: string;
    public type: string;
    public price: number;
    public ticket: Ticket= new Ticket();
}