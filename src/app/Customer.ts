import { Movie } from "./Movie";
import { User } from "./User";

export class Customer{

    public customerId: number;
    public customerName: string;
    public address: string;
    public email: string;
    public password: string;
    public user: User= new User();
    public movie: Movie= new Movie();
}