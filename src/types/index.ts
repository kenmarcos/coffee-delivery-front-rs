export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface CartCoffee extends Coffee {
  quantity: number;
}
