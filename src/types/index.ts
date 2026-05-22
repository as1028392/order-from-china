export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  avatar?: string;
  address: IAddress;
  role: 'customer' | 'seller' | 'admin';
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isDefault: boolean;
}

export interface IProduct {
  _id: string;
  sellerId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  stock: number;
  rating: number;
  reviews: IReview[];
  shippingDays: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReview {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: Date;
}

export interface IOrder {
  _id: string;
  userId: string;
  items: IOrderItem[];
  shippingAddress: IAddress;
  paymentMethod: 'stripe' | 'paypal' | 'bank_transfer';
  paymentStatus: 'pending' | 'completed' | 'failed';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalPrice: number;
  shippingCost: number;
  tax: number;
  discount?: number;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface ICart {
  _id: string;
  userId: string;
  items: IOrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: IUser;
}

export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
