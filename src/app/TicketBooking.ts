import { ɵLocaleDataIndex } from "@angular/core";
import { Customer } from "./Customer";
import { Show } from "./Show";
import { Ticket } from "./Ticket";

export class TicketBooking{

    public transactionId: number;
    public transactionMode: string;
    public transactionStatus: string;
    public totalCost: number;
    public bookingDate: Date;
    public ticket: Ticket= new Ticket();
    public customer: Customer= new Customer();
    public showId: Show= new Show();
    
}