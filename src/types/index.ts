export interface IGetResponseProducts {
  data: IGetProducts;
  message: string;
  statusCode: number;
}

export interface IGetProducts {
  limit: number;
  page: number;
  products: IProduct[];
  total: number;
}

export interface IReview {
  id: number;
  comment: string;
}

export interface IDiscount {
  percent?: number;
}

export interface IProduct {
  id: number;
  name: string;
  title: string;
  desc: string;
  sales_package: string;
  price: number;
  width: string;
  height: string;
  weight: string;
  depth: string;
  categoryId: number;
  quantity: number;
  created_country: string;
  garanty: number; // in years
  averageRating: number;
  colors: string[];
  is_liked?: boolean; // optional
  discountId?: IDiscount; // optional discount information
  reviews?: IReview[]; // moved out of discountId
  filling_material: string;
  upholstery_material: string;
  secondary_material: string;
  images: string[];
}


export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
  priceOrder?: "asc" | "desc";
  category?: string
}

export interface ICustomer {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  confirm_password: string,
  phone_number: string,
}

export interface ICustomerDataResponse {
  statusCode: number;
  message: string;
  data: {
    customer: ICustomer;
  };
}
export interface OtpResponse {
  id?: number;
  access_token: string;
  statusCode: number;
  message: string;
}