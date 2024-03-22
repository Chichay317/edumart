export interface UserInfo {
  _id: string;
  username: string;
  email: string;
  img: string;
}

export interface StateProps {
  productData: [];
  favoriteData: [];
  userInfo: null | string;
  next: any;
}

export interface ProductProps {
  id: string;
  itemAvailability: string;
  itemCategory: string;
  itemDescription: string;
  croppedImage: string;
  itemLocation: string;
  itemName: string;
  itemPrice: string;
  sellerEmail: string;
  sellerName: string;
  sellerNumber: string;
}

export interface StoreProduct {
  id: string;
  itemAvailability: string;
  itemCategory: string;
  itemDescription: string;
  croppedImage: string;
  itemLocation: string;
  itemName: string;
  itemPrice: string;
  sellerEmail: string;
  sellerName: string;
  sellerNumber: string;
}
