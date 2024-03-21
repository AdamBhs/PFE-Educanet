export interface SourceType {
    name: string;
    etat: string;
    

    $checked?: boolean;
    $expandConfig?: any;
    children?: any;
    chosen?: boolean;
    $isChildTableOpen?: boolean;
  }
  
  export const originSource = [
    {
      name: "Carpi", 
      etat: "Connected"
    },
    {
      name: "Modena", 
      etat: "Connected"
    },
      {
        name: "Bazzano", 
        etat: "Connected"
      },
      {
        name: "SOLIERA", 
        etat: "Connected"
      },
  ]