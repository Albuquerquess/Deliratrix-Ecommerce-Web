export interface StyledIdentifyProps {
    infoDisplayed: boolean;
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
    content_id: string;
    id: number;
    price: number;
}
export interface cartDataProps {
    contents: contentProps[],
    prices: priceProps[]
}
export interface DebtorProps {
    name: string;
    phone: string;
    email: string;
}