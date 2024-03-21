export interface SourceType {
    ArticleName?: string;
    Price: Number;
    TotalQuantity: Number;
    TotalAmount: Number;
    TVA: Number;
    HT: Number;
    PaymentType: string;
    Date: Date;
    Deleted: string;

    detail?: string;
    $checked?: boolean;
    $expandConfig?: any;
    children?: any;
    chosen?: boolean;
    $isChildTableOpen?: boolean;
}
  
export const originSource = [
    // {
    //   id: 1,
    //   firstName: 'Mark',
    //   lastName: 'Otto',
    //   dob: new Date(1990, 12, 1),
    //   gender: 'Male',
    //   description: 'handsome man'
    // },
];