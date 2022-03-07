import { Theatre } from "./Theatre";

export class Screen{

    public screenId: number;
    public theatre: Theatre= new Theatre();
    public screenName: string;
    public rows: number;
    public columns: number;
}