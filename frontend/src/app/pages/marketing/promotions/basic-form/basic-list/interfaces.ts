export interface Item {
    Categoria?: string;
    Descrizione?: string;
    Prezzo?: string;
    Inizio?: string;
    Fine?: string;
    idPromotion?: string;
    
    assignee?: string;
    status?: string;
    timeline?: string;
    $checked?: boolean;
    $expandConfig?: any;
    children?: any;
    chosen?: boolean;
    $isChildTableOpen?: boolean;
  }
  
export interface ListPager {
    pageSize?: number;
    pageIndex?: number;
  }