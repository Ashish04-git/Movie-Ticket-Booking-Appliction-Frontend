import { Movie } from "./Movie";
import { Screen } from "./Screen";

export class Show{

    public showId: number;
    public showStartTime: Date;
    public showEndTime: Date;
    public movie: Movie= new Movie();
    public screens: Screen= new Screen();
}