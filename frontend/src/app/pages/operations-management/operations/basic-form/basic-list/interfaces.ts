export interface Item {
    date?: string;
    name_of_client?: string;
    payement_type?: string;
    quantity?: string;
    operation_number?: string;
    payement_date?: string;
    
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