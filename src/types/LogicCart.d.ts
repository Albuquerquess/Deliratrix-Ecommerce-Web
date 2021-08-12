
export interface LogicCartItemProps {
  itemId: number;
}

export interface PriceItensProps {
  itemId: number;
  priceId: number;
}

interface contentProps {
  category: string;
  desc: string;
  id: number;
  rate: number;
  registered_at: string;
  title: string;
  type: string;
  url: string;
}
interface priceProps {
  id: number;
  price: number;
  content_id: string;
}
export interface cartDataProps {
  contents: contentProps[],
  prices: priceProps[]
}

export interface ItemsAndPricesOnCookiesProps {
  contentIds: (number | undefined)[],
  priceIds: (number | undefined)[]
}
export interface LogicCartProps {
  handleAddItemToCart: (itemId: number, priceId: number) => void;
  handleRemoveItemToCart: (itemId: number) => void;
  getCartReport: () => any;
  contentIds: (number | undefined)[]
  priceIds: (number | undefined)[];
  }