import { Agency } from "../../resourcess/agency/agency";

export interface Customer {
    codeClient: number,
    name: string;         
    numTelp: string;     
    pinCode: number;     
    agence: Agency; 
}
