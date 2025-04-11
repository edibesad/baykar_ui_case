export interface HouseInfo {
  image: string;
  bedNum: number;
  bathNum: number;
  name: string;
  address: string;
  price: string;
  state?: "popular" | "new" | "discount" | undefined;
}
