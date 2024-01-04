export interface Product {
    productName: string;
    productCategory: string;
    date: Date;
    productFreshness: string;
    price: number;
    comments: string;
}

export interface ProductWithId {
    _id: string;
    productName: string;
    productCategory: string;
    date: Date;
    productFreshness: string;
    price: number;
    comments: string;
}